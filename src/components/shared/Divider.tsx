interface DividerProps {
	orientation?: 'horizontal' | 'vertical';
	spacing?: number;
	className?: string;
}

export function Divider({ orientation = 'horizontal', spacing = 16, className }: DividerProps) {
	const style =
		orientation === 'horizontal'
			? { marginTop: spacing, maginBottom: spacing }
			: { marginLeft: spacing, marginRight: spacing };

	const clasNamesByOrientation = {
		horizontal: 'w-full h-px',
		vertical: 'self-stretch w-px',
	};

	return (
		<div
			role="separator"
			aria-orientation={orientation}
			style={style}
			className={['bg-border', clasNamesByOrientation[orientation], className]
				.filter(Boolean)
				.join(' ')}
		/>
	);
}
