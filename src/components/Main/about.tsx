import constants from "@/helpers/constants";
import Card from "@/UI/card";

import Button from "../UI/button";

const About = () => {
	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[10] gap-4 auto-rows-[minmax(200px,auto)]">
				<Card className="md:col-span-2 md:row-span-2 group">
					<div className="text-2xl custom-gradient-text">About Me</div>
				</Card>
				<Card className="group">
					<div>
						<div className="text-2xl custom-gradient-text">{constants.EXPERIENCE}</div>
						<div className="text-7xl custom-gradient-text">
							9<span className="text-4xl">+</span>
						</div>
						<p className="custom-bento-text">{constants.EXPERIENCE_DESCRIPTION}</p>
					</div>
				</Card>
				<Card className="md:col-span-1 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">{constants.TECHNICAL_LEADERSHIP}</div>
					<p className="custom-bento-text text-md mt-4">
						{constants.TECHNICAL_LEADERSHIP_DESCRIPTION}
					</p>
				</Card>
				<Card className="md:col-span-1 md:row-span-2 group">
					<div className="text-2xl custom-gradient-text">Skills</div>
				</Card>
				<Card className="md:col-span-2 md:row-span-1 group" width="max-w-md">
					<div className="text-2xl custom-gradient-text">
						{constants.CONTACT_ME} <span className="text-4xl">👋🏻</span>{" "}
					</div>
					<p className="mt-2 text-xl text-slate-50">
						{constants.CONTACT_ME_DESCRIPTION} <span className="text-2xl">💬</span>
					</p>
					<a href="#contact_me">
						<Button label={constants.CONTACT_ME_BUTTON} />
					</a>
				</Card>
				<Card className="md:col-span-2 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">Problem Solving</div>
					<p className="custom-bento-text text-md mt-4">
						Excel at identifying and resolving complex UI and functionality issues, ensuring optimal
						UI/UX across various devices and browsers.
					</p>
				</Card>
				<Card className="md:col-span-1 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">Team Player</div>
				</Card>
				<Card className="md:col-span-1 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">Detail Oriented</div>
					<p className="custom-bento-text text-md mt-4">
						My meticulous attention to detail ensures pixel-perfect, intuitive interfaces that
						enhance user engagement and satisfaction.
					</p>
				</Card>
				<Card className="md:col-span-1 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">Tech Enthusiast</div>
				</Card>

				{/* <BentoItem
					title="Investment Strategies"
					description="Tailored investment strategies to maximize your returns."
					className="md:row-span-2 group"
					extraContent={
						<div className="mt-4 space-y-2">
							<p className="text-sm text-gray-600">
								Our expert team develops personalized investment plans based on your:
							</p>
							<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
								<li>Risk tolerance</li>
								<li>Financial goals</li>
								<li>Time horizon</li>
							</ul>
						</div>
					}
				/>
				<BentoItem
					title="Currency Exchange"
					description="Competitive rates for all your currency exchange needs."
					className="group"
				/>
				<BentoItem
					title="Portfolio Management"
					description="Expert portfolio management to help you achieve your financial goals."
					className="md:col-span-2 group"
				/>
				<BentoItem
					title="Market Insights"
					description="Stay ahead with our cutting-edge market insights and analysis."
					className="md:row-span-2 group"
					extraContent={
						<div className="mt-4 space-y-2">
							<p className="text-sm text-gray-600">Our insights cover:</p>
							<ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
								<li>Stock market trends</li>
								<li>Economic indicators</li>
								<li>Industry-specific analysis</li>
								<li>Global financial news</li>
							</ul>
						</div>
					}
				/>
				<BentoItem
					title="Wealth Management"
					description="Comprehensive wealth management services for high-net-worth individuals."
					className="group"
				/> */}
			</div>
		</div>
	);
};

export default About;
