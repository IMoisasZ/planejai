import { simulationFormSteps } from '@/data/simulation';
import { FormStep } from './FormStep';
import { StepProgress } from './Progress';

export function SimulationForm() {
	const currentStep = simulationFormSteps[0]; // Example: Get the first step from the simulationSteps array
	return (
		<>
			<StepProgress currentStep={1} totalSteps={2} />
			<FormStep key={currentStep.id} {...currentStep} />
		</>
	);
}
