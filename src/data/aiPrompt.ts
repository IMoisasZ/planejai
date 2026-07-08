import { parseCurrency } from '@/utils/currency';
import { calcMothlySavings } from '@/utils/simulation';

import type { SimulationRecord } from '@/utils/simulation';

const RESPONSE_SCHEMA = `{
    "feasibility": {
        "status": "viable" | "needs_adjustment" | "unfeasible",
        "content: "<Análise objetiva sobre a meta é atingivel no prazo com o valor disponivel. Mencione os numeros relevantes.>"
    },
    "diagnosis": {
        "content": "<Diagnostico focado no comprometimento do orçamento: quanto % da renda está comprometida com gastos e dividas, e o que isso representa para a súde financeira.>"
    },
    "suggestions": {
        "items": ["<Sugestão prática e concreta para reduzir gastos ou reorganizar o orçamento>"]
    },
    "extraIncome": {
        "items": ["<Ideia prática para gerar renda extra compativel com a realidade brasileira>"]
    },
    "investment": {
        "items": ["<Sugestão de investimento acessivel para o perfil apresentado, com foco em atingir a meta>"]
    },
    "motivation": {
        "content": "<Mensagem final motivacional e personalizada, citando a meta pelo nome>"
    }
}`;

export function buildAIPrompt(simulation: SimulationRecord) {
	const { income, expenses, debts, goalName, goalAmount, goalDeadline } = simulation;

	const monthlySavings = calcMothlySavings(simulation);
	const monthlySavingsNeeded = parseCurrency(goalAmount) / parseInt(goalDeadline);

	return `Você é um educador financerio especializado em finanças pessoais.
    Analise os dados abaixo e gere um diagnostico financeiro personalizado com linguagem clara, diadtica e encorajadora
    voltado para pessoas sem conhecimento financeiro. O diagnostico será exibido diretamente ao usuário no app,
    fale sempre em segunda pessoa ("você tem...", "sua meta...").
    
    Dados da simulação:
    - Renda mensal bruta: ${income}
    - Cutos fixos esseniais: ${expenses}
    - Dívidas e parcelas mensais: ${debts}
    - Valor disponivel por mês: ${monthlySavings} reais
    - Meta: ${goalName}
    - Custo da meta: ${goalAmount}
    - Prazo desejado: ${goalDeadline} meses
    - Economia mensalnecessária para atingir a meta no prazo: ${monthlySavingsNeeded} reais
    - Saldo após reserva para meta: ${monthlySavings - monthlySavingsNeeded} reais
    
    Retorne apenas um JSON válido, sem texto adicional, sem blocos de código, neste formato exato:

    ${RESPONSE_SCHEMA}

    Regras:
    - Todos os textos em portugês do Brasil
    - Máximo de 4 linhas por lista
    - Seja especifico ao citar valores calculados
    - Não repita informações entre seções
    - Nunca use markdown dentro dos valores JSON
    - Para o campo "feasibility.status", use os seguintes critérios:
        - "viable": saldo após reserva para a meta é maior ou igual a 0
        - "needs_adjustment": saldo negativo até 20% do valor da economia mensal necessária
        - "unfeasible": saldo negativo superior a 20% do valor da economia mensal necessária
    `;
}
