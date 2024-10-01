import constants from "@/helpers/constants";
import Card from "@/UI/card";

import CSSLogo from "../svg/csslogo";
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
		<div className="container mx-auto px-4">
			<div>
				About Me Hello I am rahul teja Amilineni working in lenskart as senior software developer
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-[10] gap-4 auto-rows-[minmax(200px,auto)]">
				<Card className="col-span-1 row-span-1 group" width="max-w-sm">
					<div>
						<div className="text-2xl custom-gradient-text">{constants.EXPERIENCE}</div>
						<div className="text-7xl custom-gradient-text">
							9<span className="text-4xl">+</span>
						</div>
						<p className="custom-bento-text">{constants.EXPERIENCE_DESCRIPTION}</p>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group">
					<div className="text-2xl custom-gradient-text">Team Player</div>
					<p className="custom-bento-text text-md mt-4">
						Worked closely with cross-functional teams to design, develop, and deploy web
						applications.
					</p>
				</Card>

				{/* Contact Me Card */}
				<Card className="col-span-2 row-span-1 group" width="max-w-md">
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
				<Card className="col-span-1 row-span-1 group">
					<div className="text-2xl custom-gradient-text">Snag Solver</div>
					<p className="custom-bento-text text-md mt-4">
						Expert in identifying complex UI/UX issues and optimizing functionality across multiple
						devices.
					</p>
				</Card>
				<Card className="col-span-1 row-span-2 md:col-span-3 md:row-span-1 group" width="max-w-xl">
					<div className="text-2xl custom-gradient-text">Skills</div>
					<div className="mt-5 flex flex-wrap gap-8">
						<Transition duration={500} scale={100}>
							<HTMLLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={100}>
							<CSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<JavaScriptLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TypeScriptLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<ReactLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<SCSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TailwindCSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TailwindCSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TailwindCSSLogo width={50} height={50} />
						</Transition>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group">
					<div className="text-2xl custom-gradient-text">{constants.SHARP_EYE}</div>
					<p className="custom-bento-text text-md mt-4">{constants.SHARP_EYE_DESC}.</p>
				</Card>

				<Card className="col-span-2 row-span-1 group">
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
