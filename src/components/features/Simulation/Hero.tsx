import PigyBankImage from '@/assets/images/pig-bank.png';

export function SimulationHero() {
	return (
		<div className="mb-8 text-center">
			<div className="flex flex-col items-center justify-center sm:flex-row">
				<h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
					Vamos planejar seu futuro
				</h1>
				<img
					src={PigyBankImage}
					alt=""
					aria-hidden="true"
					className="h-16 w-16 sm:-ml-3 sm:-mt-2"
				/>
			</div>
			<p className="text-muted-foreground text-sm">
				Responda algumas perguntas para ter insights financeiros personalizados.
			</p>
		</div>
	);
}
