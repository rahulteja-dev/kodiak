"use client";

export const Button = ({ label }: { label: string }) => {
	return (
		<button
			type="button"
			className="mt-4 text-md font-semibold rounded-3xl bg-buttonbg text-slate-50 px-7 py-3 border-slate-50 border-2 focus:outline-none transition-transform duration-300 ease-in-out hover:scale-105"
		>
			{label}
		</button>
	);
};
