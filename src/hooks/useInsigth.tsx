import { buildAIPrompt } from '@/data/aiPrompt';
import { getInsight, type InsightData } from '@/services/aiService';
import { useCallback, useEffect, useState } from 'react';
import { useSimulationStorage } from './useSimulationStorage';

export const useInsight = (id: string) => {
	const [insight, setInsight] = useState<InsightData | null>(null);
	const [isLoding, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const { getFormData } = useSimulationStorage();

	// Necessário o uso do useCallback pois temos que colocar essa função
	// como array de dependencias do useEffect
	const fetchInsigth = useCallback(
		async (simulationId: string) => {
			const simulation = getFormData(simulationId);

			if (!simulation) {
				setError('Siulação não encontrada.');
				return;
			}

			setIsLoading(true);
			setError(null);

			try {
				const prompt = buildAIPrompt(simulation);
				const data = await getInsight(prompt);
				setInsight(data);
			} catch {
				setError('Erro ao gerar o diagnostico. Tente novamente.');
			} finally {
				setIsLoading(false);
			}
		},
		[getFormData]
	);

	useEffect(() => {
		// Evita loop infinito de requisições para a API do Gemini
		if (insight || isLoding || error) {
			return;
		}

		fetchInsigth(id);
	}, [id, insight, isLoding, fetchInsigth]);

	return { insight, isLoding, error, fetchInsigth };
};
