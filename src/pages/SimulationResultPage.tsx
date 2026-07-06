import { Card } from '@/components/features/SimulationResults/Card';
import { PageHero } from '@/components/shared/PageHero';
import type { SimulationFormData } from '@/data/simulation';
import { CalendarClock, Goal } from 'lucide-react';

const mock: SimulationFormData = {
	income: 'R$ 5.000,00',
	expenses: 'R$ 2.000,00',
	debts: 'R$ 500,00',
	goalName: 'Viagem para o Japão',
	goalAmount: 'R$ 15.000,00',
	goalDeadline: '12',
};

export function SimulationResultPage() {
	const data: SimulationFormData = mock;
	return (
		<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<PageHero
				title="Resultado da sua simulação"
				subtitle="Com base no seu perfil financeiro e objetivos."
			/>
			<div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
				<Card
					icon={Goal}
					label="Custo da Meta"
					value={data.goalAmount}
					subtitle={'Viagem para o Japão'}
				/>
				<Card
					icon={CalendarClock}
					label="Prazo"
					value={`${data.goalDeadline} meses`}
					subtitle={'Prazo para atingir a meta'}
				/>
			</div>
		</main>
	);
}
