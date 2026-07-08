interface GeminiResponse {
	candidates: {
		content: {
			parts: { text: string }[];
		};
	}[];
}

export interface InsightData {
	feasibility: {
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
	investiment: {
		items: string[];
	};
	motivation: {
		content: string;
	};
}

const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY);

const MODEL_NAME = 'gemini-1.5-flash';
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
// const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

const callGeminiAPI = async (prompt: string) => {
	const response = await fetch(GEMINI_API_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'x-goog-api-key': API_KEY },
		body: JSON.stringify({
			contents: [{ parts: [{ text: prompt }] }],
		}),
	});

	if (!response.ok) {
		throw new Error(`Erro na apicação: ${response.status}`);
	}

	return (await response.json()) as GeminiResponse;
};

export const getInsight = async (prompt: string) => {
	const response = await callGeminiAPI(prompt);
	const json = response.candidates[0].content.parts[0].text;
	return JSON.parse(json) as InsightData;
};
