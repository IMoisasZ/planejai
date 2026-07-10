# 🌟 Planej.ai — Planejador Financeiro Inteligente

O **Planej.ai** é um aplicativo web moderno e interativo para planejamento financeiro pessoal. Utilizando inteligência artificial de ponta, o sistema analisa a saúde financeira do usuário de forma didática, validando a viabilidade de suas metas e fornecendo diagnósticos personalizados com recomendações de economia, renda extra e investimentos.

---

## 📸 Demonstração Visual & Fluxo do App

Abaixo está o fluxo completo da aplicação, exibindo o processo de simulação e os resultados gerados.

### 📝 1. Formulário Passo a Passo (Tema Claro)

O usuário responde a um formulário em 6 etapas dinâmicas, com validações de dados e progresso em tempo real:

* **Passo 1/6 — Renda Mensal Bruta**: Coleta da renda total recebida no mês.
  ![Passo 1 - Renda Mensal](src/assets/images_readme/Screenshot%202026-07-10%20122404.png)

* **Passo 2/6 — Custos Fixos de Vida**: Registro das despesas recorrentes essenciais (aluguel, contas).
  ![Passo 2 - Custos Fixos](src/assets/images_readme/Screenshot%202026-07-10%20122427.png)

* **Passo 3/6 — Dívidas/Parcelas**: Registro de compromissos financeiros em parcelas vigentes.
  ![Passo 3 - Dívidas e Parcelas](src/assets/images_readme/Screenshot%202026-07-10%20122652.png)

* **Passo 4/6 — Nome da Meta**: Identificação do objetivo de consumo desejado.
  ![Passo 4 - Nome da Meta](src/assets/images_readme/Screenshot%202026-07-10%20122827.png)

* **Passo 5/6 — Custo da Meta**: Valor financeiro total estimado para atingir a meta.
  ![Passo 5 - Custo da Meta](src/assets/images_readme/Screenshot%202026-07-10%20122845.png)

* **Passo 6/6 — Prazo Desejado**: Tempo estipulado (em meses) para realizar o objetivo.
  ![Passo 6 - Prazo Desejado](src/assets/images_readme/Screenshot%202026-07-10%20122901.png)

---

### ⏳ 2. Estado de Carregamento (Loading Skeleton)

Ao enviar o formulário, a aplicação exibe uma transição animada de placeholders (*Skeleton Screen*), proporcionando uma experiência de carregamento suave enquanto a inteligência artificial analisa os dados.

![Loading Skeleton](src/assets/images_readme/Screenshot%202026-07-10%20122912.png)

---

### 🎨 3. Suporte Completo a Temas (Light & Dark Mode)

O **Planej.ai** conta com um design moderno construído com suporte nativo a temas claro e escuro. A troca pode ser realizada instantaneamente no botão localizado no cabeçalho.

#### 📊 Tela de Resultados

Apresenta o detalhamento matemático da simulação (economia mensal recomendada, renda líquida disponível) juntamente com o **Insight Financeiro Personalizado** gerado diretamente pela inteligência artificial.

* **Tema Claro:**
  ![Resultado no Tema Claro](src/assets/images_readme/Screenshot%202026-07-10%20122927.png)

* **Tema Escuro:**
  ![Resultado no Tema Escuro](src/assets/images_readme/Screenshot%202026-07-10%20122959.png)

#### 🗂️ Histórico de Simulações

Espaço dedicado a listar, revisar e excluir simulações salvas no navegador local do usuário.

* **Tema Claro:**
  ![Histórico no Tema Claro](src/assets/images_readme/Screenshot%202026-07-10%20123036.png)

* **Tema Escuro:**
  ![Histórico no Tema Escuro](src/assets/images_readme/Screenshot%202026-07-10%20123021.png)

---

## 🚀 Tecnologias Utilizadas

O ecossistema do app foi construído visando robustez, tipagem estática segura, velocidade de desenvolvimento e integração perfeita de IA:

* **React 19** — Biblioteca frontend declarativa e de alta performance.
* **TypeScript** — JavaScript com tipagem estática que previne bugs em tempo de desenvolvimento.
* **Vite 8** — Build tool ultra-rápida baseada em ESM.
* **Tailwind CSS v4** — Framework utilitário de CSS focado em velocidade e otimização.
* **Google Gen AI SDK (`@google/genai`)** — SDK oficial de integração do Google para consultas estruturadas de IA.
* **React Router Dom v7** — Gerenciador de rotas de navegação SPA.
* **Lucide React** — Conjunto de ícones vetoriais modernos.
* **React Loading Skeleton** — Placeholders visuais elegantes para a transição dos insights.

---

## 📂 Estrutura de Pastas

```text
planejai/
├── .env.local             # Variáveis de ambiente locais (Chave da API do Gemini)
├── .gitignore             # Configuração de arquivos ignorados no Git (ex: imagens locais do README)
├── .prettierrc            # Regras de formatação de código
├── eslint.config.js       # Regras de qualidade de código
├── index.html             # Arquivo HTML principal
├── package.json           # Dependências e comandos de execução
├── tsconfig.json          # Configurações globais do compilador TypeScript
├── vite.config.ts         # Configurações do Vite
├── public/                # Arquivos estáticos servidos diretamente
└── src/                   # Diretório de código principal
    ├── App.tsx            # Componente raiz da aplicação
    ├── main.tsx           # Ponto de entrada de inicialização do React
    ├── index.css          # Estilos CSS globais e Tailwind v4
    ├── router.tsx         # Configuração das rotas SPA
    ├── assets/            # Imagens e mídias estáticas importadas no código
    │   └── images_readme/ # Capturas de tela utilizadas no README (Ignoradas no Git)
    ├── components/        # Componentes de interface de usuário
    │   ├── features/      # Blocos funcionais (Insights, Simulation, History, Results)
    │   ├── layout/        # Componente de layout base (RootLayout)
    │   └── shared/        # Componentes básicos reutilizáveis (Button, Input, etc.)
    ├── context/           # Contextos de estado (ThemeContext para Dark Mode)
    ├── data/              # Conjuntos de dados e prompts estruturados (aiPrompt, simulation)
    ├── hooks/             # Custom hooks (useInsight, useSimulationStorage, useTheme)
    ├── services/          # Conexão e requisição externa com o Gemini SDK
    ├── styles/            # Definições específicas de CSS de temas
    └── utils/             # Utilitários de lógica (formatação, cálculos matemáticos)
```

---

## 🔑 Autenticação e Armazenamento

1. **Privacidade Total do Usuário (Sem Login)**:
   * **Não há sistema tradicional de login ou e-mail.** 
   * As simulações criadas e o histórico de diagnósticos são armazenados localmente e de forma privada no navegador utilizando o `localStorage` do HTML5.

2. **Integração com a API do Gemini**:
   * O motor de IA necessita de chaves do Google AI Studio para autenticação.
   * Adicione a chave correspondente no arquivo `.env.local` localizado na raiz do projeto:
     ```env
     VITE_GEMINI_API_KEY=SUA_CHAVE_AQUI
     ```

---

## ⚙️ Instruções de Instalação e Execução

### 1. Preparação
Certifique-se de possuir o **Node.js** instalado na máquina. No terminal, acesse a pasta raiz `planejai`.

### 2. Instalar Dependências
```bash
npm install
```

### 3. Configurar API Key
Crie um arquivo `.env.local` na raiz da pasta e configure sua chave obtida no [Google AI Studio](https://aistudio.google.com/):
```env
VITE_GEMINI_API_KEY=sua_chave_do_gemini_aqui
```

### 4. Executar em Desenvolvimento
```bash
npm run dev
```
O console exibirá o endereço local (por padrão, `http://localhost:5173/`).

### 5. Compilar para Produção (Build)
```bash
npm run build
```
Os arquivos prontos e otimizados para deploy serão gerados na pasta `/dist`.

---

## 👨‍💻 Autoria e Desenvolvimento

Desenvolvido por **Moisés Santos**  
🔗 **GitHub:** [@IMoisasZ](https://github.com/IMoisasZ)
