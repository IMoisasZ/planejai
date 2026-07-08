import { GoogleGenAI } from '@google/genai';

export interface InsightData {
    feasbility: {
        status: 'viable' | 'needs_adjustment' | 'unfeasible';
        content: string;
    };
    diagnosis: {
        content: string;
    };
    suggestions: {
        items: string[];
    };
    extraIncome: {
        items: string[];
    };
    investment: {
        items: string[];
    };
    motivation: {
        content: string;
    };
}

// 🛠️ Inicializa a SDK oficial do Google utilizando a sua chave atual
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const getInsight = async (prompt: string): Promise<InsightData> => {
    try {
        const response = await ai.models.generateContent({
            // A SDK gerencia a rota correta para o modelo automaticamente
            model: 'gemini-2.5-flash', 
            contents: prompt,
            config: {
                // Força o Gemini a estruturar a resposta como um JSON estrito
                responseMimeType: "application/json"
            }
        });

        if (!response || !response.text) {
        throw new Error("A API retornou uma resposta sem texto ou inválida.");
    }
        
        const jsonText = response.text;

        if (!jsonText) {
            throw new Error("A API retornou uma resposta vazia.");
        }

        // Converte o texto gerado diretamente no formato da sua interface
        return JSON.parse(jsonText) as InsightData;

    } catch (error) {
        console.error("Erro detalhado na requisição do Gemini SDK:", error);
        throw error;
    }
};