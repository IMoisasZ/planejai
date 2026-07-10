import { Goal } from 'lucide-react';

interface CardProps {
	icon?: boolean;
	label?: string;
	value?: string;
	subtitle?: string;
	variant?: 'default' | 'primary';
}

const variantClasses = {
	default: {
		card: 'bg-card',
		accent: 'text-primary',
		value: 'text-foreground',
		subtitle: 'text-muted-foreground',
	},
	primary: {
		card: 'bg-primary',
		accent: 'text-primary-foreground',
		value: 'text-foreground-foreground',
		subtitle: 'text-muted-foreground/70',
	},
};

export function CardHistory({
	icon = false,
	label,
	value,
	subtitle,
	variant = 'default',
}: CardProps) {
	const styles = variantClasses[variant];

	return (
		<>
			{icon ? (
				<div className="mb-3 flex items-center justify-between gap-2">
					<Goal size={40} className={styles.accent} />
					<div>
						<h3 className={['text-lg font-bold tracking-widest'].join(' ')}>{label}</h3>
						<p className={['text-md font-semibold', styles.subtitle].join(' ')}>{value}</p>
					</div>
				</div>
			) : (
				<>
					<div>
						<p className={['text-xl font-normal', styles.subtitle].join(' ')}>{subtitle}</p>
						<p className={['text-md font-semibold tracking-widest'].join(' ')}>{value}</p>
					</div>
				</>
			)}
		</>
	);
}
