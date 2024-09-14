const BadgePing = ({ color = "bg-slate-50" }: { color?: string }) => {
	return (
		<span className="relative flex h-3 w-3">
			<span
				className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-75}`}
			></span>
			<span className={`relative inline-flex h-3 w-3 rounded-full ${color}`}></span>
		</span>
	);
};

export default BadgePing;
