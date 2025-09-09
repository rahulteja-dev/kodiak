import React from "react";
import Card from "@/UI/card";

const Process: React.FC = () => {
	const steps = [
		{
			id: 1,
			title: "Concept-to-Strategy Call",
			description:
				"Understanding your vision, target audience, and KPIs. We'll map out technical requirements and define success metrics that align with your business goals.",
		},
		{
			id: 2,
			title: "MVP & PRD Blueprint",
			description:
				"Creating a detailed product roadmap with scalable architecture. I design systems that are maintainable, secure, and ready for future expansion.",
		},
		{
			id: 3,
			title: "Milestones & Progress",
			description:
				"Regular sprint reviews with measurable progress. Each milestone delivers working features, ensuring smooth performance for users globally.",
		},
		{
			id: 4,
			title: "Market-Ready Delivery",
			description:
				"Launch with confidence backed by continuous support. I provide AI upgrades, performance optimization, and scaling strategies for global growth.",
		},
	];

	return (
		<div className="container mx-auto px-5">
			<div className="custom-text mb-10">
				<p className="mb-4">
					I follow the{" "}
					<span className="font-bold custom-gradient-text">"Rapid Development Framework"</span> - a
					proven methodology that transforms ideas into market-ready products. My approach combines
					strategic planning with agile execution, ensuring your project delivers{" "}
					<span className="font-bold custom-gradient-text">measurable business impact</span> from
					day one.
				</p>
			</div>

			<div className="container mx-auto">
				<div className="relative pl-3 ml-6">
					{/* Timeline line that ends at step 4 */}
					<div
						className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-foreground to-gradientwhite"
						style={{ height: "calc(100% - 120px)" }}
					></div>

					{steps.map((step) => (
						<div key={step.id} className="mb-12 last:mb-0">
							<div className="absolute left-0 flex items-center justify-center w-10 h-10 -translate-x-1/2 bg-background rounded-full border-2 border-buttonbg">
								<span className="text-slate-50 font-bold text-lg">{step.id}</span>
							</div>
							<div className="ml-6 mr-6 sm:max-lg:ml-8 lg:ml-10">
								<Card width="max-w-full">
									<div>
										<h3 className="text-xl font-semibold custom-gradient-text mb-3">
											{step.title}
										</h3>
										<p className="text-base text-slate-400 leading-relaxed">{step.description}</p>
									</div>
								</Card>
							</div>
						</div>
					))}
				</div>

				{/* Call to Action - Outside timeline */}
				<Card className="mt-12" width="max-w-full">
					<div className="text-center py-4">
						<h3 className="text-2xl font-bold custom-gradient-text mb-4">
							Ready to Launch Your Next Big Idea?
						</h3>
						<p className="text-base text-slate-400 leading-relaxed max-w-3xl mx-auto">
							Let's transform your vision into a scalable, AI-powered solution that drives real
							business results. From concept to market leader - I'll be your technical partner every
							step of the way.
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Process;
