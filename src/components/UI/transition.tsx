const Transition = ({
	children,
	duration = 300,
	scale = 105,
}: {
	children: React.ReactNode;
	duration?: number;
	scale?: number;
}) => {
	return (
		<div className={`transition-transform duration-${duration} ease-in-out hover:scale-${scale}`}>
			{children}
		</div>
	);
};

export default Transition;
