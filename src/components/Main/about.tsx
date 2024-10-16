import constants from "@/helpers/constants";
import Card from "@/UI/card";

import CSSLogo from "../svg/csslogo";
import HTMLLogo from "../svg/htmllogo";
import JavaScriptLogo from "../svg/javascriptlogo";
import NextLogo from "../svg/nextlogo";
import ReactLogo from "../svg/reactlogo";
import SCSSLogo from "../svg/scsslogo";
import StyledLogo from "../svg/styledlogo";
import TailwindCSSLogo from "../svg/tailwindlogo";
import TypeScriptLogo from "../svg/tslogo";
import Button from "../UI/button";
import Transition from "../UI/transition";

const About = () => {
	return (
		<div className="container mx-auto px-5">
			<div className="custom-text mb-10">
				<p className="mb-4">
					Right now, I'm spearheading the development of{" "}
					<span className="font-bold custom-gradient-text">micro frontend architecture</span> at{" "}
					<a
						className="font-bold text-slate-50 hover:text-buttonbg focus-visible:text-buttonbg"
						href="https://www.lenskart.com"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="Lenskart.com"
					>
						Lenskart.com
					</a>
					. I love creating software that's both{" "}
					<span className="font-bold custom-gradient-text">pretty and smart</span> - hitting that
					sweet spot where{" "}
					<span className="font-bold custom-gradient-text">
						great design meets solid engineering.{" "}
					</span>
					It's all about making things look good while ensuring they're built on rock-solid
					architecture.
				</p>
				<p className="mb-4">
					I’m always tweaking those web vitals to make our{" "}
					<span className="font-bold custom-gradient-text">apps super snappy. </span>When I'm not at
					work, I'm geeking out over the latest frontend tech, especially anything that makes apps
					faster and more stable.
				</p>
				<p className="mb-4">
					When I'm not on the computer, I'm gaming on my PS5, chilling with a book, or hanging with
					my crew.
				</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 auto-rows-[minmax(200px,auto)]">
				<Card className="col-span-1 row-span-1 group" width="max-w-md">
					<div>
						<div className="bento-title">{constants.EXPERIENCE}</div>
						<div className="text-7xl custom-gradient-text">
							{constants.NINE}
							<span className="text-4xl">{constants.PLUS}</span>
						</div>
						<p className="custom-text mt-1">{constants.EXPERIENCE_DESCRIPTION}</p>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group md:max-lg:hidden" width="max-w-md">
					<div className="bento-title">{constants.TEAM_PLAYER}</div>
					<p className="bento-text">{constants.TEAM_PLAYER_DESC}</p>
				</Card>

				<Card className="col-span-2 row-span-1 group sm:col-span-2" width="max-w-md sm:max-w-full">
					<div className="bento-title">
						{constants.CONTACT_ME} <span className="text-4xl">👋🏻</span>{" "}
					</div>
					<p className="mt-2 text-2xl text-slate-50">
						{constants.CONTACT_ME_DESCRIPTION} <span className="text-2xl">💬</span>
					</p>
					<a href="#contact_me">
						<Button label={constants.CONTACT_ME_BUTTON} />
					</a>
				</Card>
				<Card className="col-span-1 row-span-1 group md:hidden">
					<div className="bento-title">{constants.SNAG_SOLVER}</div>
					<p className="bento-text">{constants.SNAG_SOLVER_DESC}</p>
				</Card>
				<Card className="col-span-1 row-span-2 md:col-span-2 md:row-span-1 group" width="max-w-xl">
					<div className="bento-title">Skills</div>
					<div className="mt-5 flex flex-wrap gap-8">
						<Transition duration={500} scale={100}>
							<HTMLLogo width={50} height={50} />
						</Transition>
						{/* <Transition duration={500} scale={100}>
							<CSSLogo width={50} height={50} />
						</Transition> */}
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
							<NextLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<TailwindCSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<SCSSLogo width={50} height={50} />
						</Transition>
						<Transition duration={500} scale={125}>
							<StyledLogo width={50} height={50} />
						</Transition>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group hidden md:block">
					<div className="bento-title">{constants.SNAG_SOLVER}</div>
					<p className="bento-text">{constants.SNAG_SOLVER_DESC}</p>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-md">
					<div className="bento-title">{constants.SHARP_EYE}</div>
					<p className="bento-text">{constants.SHARP_EYE_DESC}.</p>
				</Card>

				<Card className="col-span-2 row-span-1 group" width="max-w-md sm:max-w-full md:max-w-full">
					<div className="bento-title">{constants.TECHNICAL_LEADERSHIP}</div>
					<p className="bento-text">{constants.TECHNICAL_LEADERSHIP_DESCRIPTION}</p>
				</Card>
			</div>
		</div>
	);
};

export default About;
