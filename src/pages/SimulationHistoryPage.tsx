import { CardHistory } from '@/components/features/SimulationHistory/CardHistory';
import { Button } from '@/components/shared/Button';
import { Divider } from '@/components/shared/Divider';
import { PageHero } from '@/components/shared/PageHero';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { SquareArrowOutUpRight, Trash2 } from 'lucide-react';
('lucide-react');

export function SimulationHistoryPage() {
	const { getAllSimulation } = useSimulationStorage();

	const data = getAllSimulation();

	console.log('------------------------->>>>>>>>>>>>>>>>', data);
	// const monthlySavings = calcMothlySavings(data);
	return (
		<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<PageHero
				title="Histórico de simulações"
				subtitle="Acompanhe o histórico dos seus planos financeiros."
			/>
			{data.map((simulation: any) => (
				<div className="mb-6 grid grid-cols-1 justify-between gap-4 rounded-lg p-4 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:flex">
					<CardHistory icon={true} label={simulation.goalName} value={simulation.simulationDate} />
					<CardHistory value={simulation.goalAmount} subtitle={'Custo da meta'} />
					<CardHistory value={`${simulation.goalDeadline} meses`} subtitle={'Prazo'} />
					<CardHistory
						value={String(Number(data.income) - Number(data.expenses) - Number(data.debts))}
						subtitle={'Economia mensal'}
					/>
					<Divider orientation="vertical" />
					<Button icon={Trash2} sizeIcon={30} variant="ghost" style={{ color: 'red' }} />
					<Button icon={SquareArrowOutUpRight} sizeIcon={20} variant="secondary">
						Detalhes
					</Button>
				</div>
			))}
		</main>
	);
}
