import { useInsight } from '@/hooks/useInsigth';

interface AIInsightCardProps {
	simulationId: string;
}

export function AIInsightCard({ simulationId }: AIInsightCardProps) {
	const { insight } = useInsight(simulationId);
	console.log(insight);

	return (
		<div className="bg-card shadown-[4px_4px_18px_0px_rgba(0,0,0,0.2)] order-2 rounded-2xl p-6 lg:order-1 lg:col-span-2">
			Painel de Insights
		</div>
	);
}
