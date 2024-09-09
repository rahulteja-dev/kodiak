const GradientChip = ({ label }: { label: string }) => {
	return (
		<div className="flex items-center justify-center max-w-max">
			<div className="rounded-2xl bg-gradient-to-r from-foreground to-gradientwhite p-1 ">
				<div className="rounded-2xl bg-background p-3">
					<h3 className="text-md text-slate-50">{label}</h3>
				</div>
			</div>
		</div>
	);
};

export default GradientChip;
