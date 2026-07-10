import { buildAIPrompt } from '@/data/aiPrompt';
import type { SimulationRecord } from '@/data/simulation';
import { getInsight, type InsightData } from '@/services/aiService';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSimulationStorage } from './useSimulationStorage';

export const useInsight = (id: string) => {
	const isRequestPending = useRef(false);
	const { getFormData, updateSimulation } = useSimulationStorage();
	const [insight, setInsight] = useState<InsightData | null>(() => {
		const simulation = getFormData(id);

		if (simulation?.insight) {
			return simulation.insight as unknown as InsightData;
		}

		return null;
	});
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	// Necessário o uso do useCallback pois temos que colocar essa função
	// como array de dependencias do useEffect
	const fetchInsigth = useCallback(
		async (simulationId: string) => {
			const simulation = getFormData(simulationId);

			if (!simulation) {
				setError('Siulação não encontrada.');
				return;
			}

			isRequestPending.current = true;
			setIsLoading(true);
			setError(null);

			try {
				const prompt = buildAIPrompt(simulation);
				const data = await getInsight(prompt);
				setInsight(data);

				updateSimulation(simulationId, {
					...simulation,
					insight: data,
				} as SimulationRecord);
			} catch {
				setError('Erro ao gerar o diagnostico. Tente novamente.');
			} finally {
				isRequestPending.current = false;
				setIsLoading(false);
			}
		},
		[getFormData, updateSimulation]
	);

	useEffect(() => {
		// Evita loop infinito de requisições para a API do Gemini
		if (insight || isLoading || error || isRequestPending.current) {
			return;
		}

		fetchInsigth(id);
	}, [id, insight, isLoading, fetchInsigth]);

	return { insight, isLoading, error, fetchInsigth };
};
