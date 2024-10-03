const Section = ({
	children,
	id,
	title,
	ariaLabel,
}: {
	children: React.ReactNode;
	id: string;
	title: string;
	ariaLabel: string;
}) => {
	return (
		<section
			id={id}
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label={ariaLabel}
		>
			<h2 className="mx-5 leading-normal uppercase tracking-widest text-slate-50 max-w-md text-lg mb-4 sm:max-lg:text-xl sm:max-lg:mb-6 lg:sr-only">
				{title}
			</h2>
			<div>{children}</div>
			{/* <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"></div> */}
		</section>
	);
};

export default Section;
