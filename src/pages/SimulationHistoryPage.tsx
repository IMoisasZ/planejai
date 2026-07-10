import { CardHistory } from '@/components/features/SimulationHistory/CardHistory';
import { Button } from '@/components/shared/Button';
import { Divider } from '@/components/shared/Divider';
import { PageHero } from '@/components/shared/PageHero';
import { useSimulationStorage } from '@/hooks/useSimulationStorage';
import { SquareArrowOutUpRight, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
('lucide-react');

export function SimulationHistoryPage() {
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const { getAllSimulation, removeSimulation } = useSimulationStorage();

	const loadSimulation = () => {
		setData(getAllSimulation());
	};

	useEffect(() => {
		loadSimulation();
	}, []);

	const handleSimulationShow = (id: string): void => {
		void navigate(`/resultado/${id}`);
		return;
	};

	const replaceToNumbers = (value: string) => {
		return value.replace('.', '').replace(',', '.');
	};

	const calcMonthlySavins = (income: string, expenses: string, debts: string): string => {
		const calc =
			parseFloat(replaceToNumbers(income)) -
			parseFloat(replaceToNumbers(expenses)) -
			parseFloat(replaceToNumbers(debts));
		const value = new Intl.NumberFormat('pt-BR', { currency: 'BRL', style: 'currency' }).format(
			calc
		);
		return value;
	};

	return (
		<main className=" mx-auto max-w-6xl px-4 py-10 sm:py-14">
			<PageHero
				title="Histórico de simulações"
				subtitle="Acompanhe o histórico dos seus planos financeiros."
			/>
			{data.map((simulation: any) => (
				<div className="mb-6 grid cursor-pointer grid-cols-1 justify-between gap-4 rounded-lg px-6 py-2 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:flex">
					<CardHistory icon={true} label={simulation.goalName} value={simulation.simulationDate} />
					<CardHistory value={`R$ ${simulation.goalAmount}`} subtitle={'Custo da meta'} />
					<CardHistory value={`${simulation.goalDeadline} meses`} subtitle={'Prazo'} />
					<CardHistory
						value={String(
							calcMonthlySavins(simulation.income, simulation.expenses, simulation.debts)
						)}
						subtitle={'Economia mensal'}
					/>
					<Divider orientation="vertical" />
					<Button
						icon={Trash2}
						sizeIcon={30}
						variant="ghost"
						style={{ color: 'red' }}
						onClick={() => {
							removeSimulation(simulation.id);
							loadSimulation();
						}}
					/>
					<Button
						icon={SquareArrowOutUpRight}
						sizeIcon={20}
						variant="secondary"
						onClick={() => handleSimulationShow(simulation.id)}
					>
						Detalhes
					</Button>
				</div>
			))}
		</main>
	);
}
