import constants from "@/helpers/constants";
import Card from "@/UI/card";

import HTMLLogo from "../svg/htmllogo";
import JavaScriptLogo from "../svg/javascriptlogo";
import ReactLogo from "../svg/reactlogo";
import SCSSLogo from "../svg/scsslogo";
import TailwindCSSLogo from "../svg/tailwindlogo";
import TypeScriptLogo from "../svg/tslogo";
import Button from "../UI/button";
import Transition from "../UI/transition";

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
					<div className="text-2xl custom-gradient-text">{constants.SHARP_EYE}</div>
					<p className="custom-bento-text text-md mt-4">{constants.SHARP_EYE_DESC}.</p>
				</Card>
				<Card className="md:col-span-3 md:row-span-1 group" width="max-w-xl">
					<div className="text-2xl custom-gradient-text">Skills</div>
					<div className="mt-5 flex space-x-7">
						<Transition duration={500} scale={125}>
							<HTMLLogo width={60} height={60} />
						</Transition>
						<Transition duration={500} scale={125}>
							<JavaScriptLogo width={60} height={60} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TypeScriptLogo width={60} height={60} />
						</Transition>
						<Transition duration={500} scale={125}>
							<ReactLogo width={60} height={60} />
						</Transition>
						<Transition duration={500} scale={125}>
							<SCSSLogo width={60} height={60} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TailwindCSSLogo width={60} height={60} />
						</Transition>
					</div>
				</Card>
				<Card className="md:col-span-1 md:row-span-1 group">
					<div className="text-2xl custom-gradient-text">Team Player</div>
					<p className="custom-bento-text text-md mt-4">
						Worked closely with cross-functional teams to design, develop, and deploy applications.
					</p>
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
					<div className="text-2xl custom-gradient-text">{constants.TECHNICAL_LEADERSHIP}</div>
					<p className="custom-bento-text text-md mt-4">
						{constants.TECHNICAL_LEADERSHIP_DESCRIPTION}
					</p>
				</Card>
			</div>
		</div>
	);
};

export default About;
