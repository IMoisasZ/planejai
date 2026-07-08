import type { SimulationFormData } from '@/data/simulation';
import { parseCurrency } from './currency';

export function calcMothlySavings(data: SimulationFormData) {
	return parseCurrency(data.income) - parseCurrency(data.expenses) - parseCurrency(data.debts);
}

export type SimulationRecord = SimulationFormData & { id: string };
