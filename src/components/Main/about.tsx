import constants from "@/helpers/constants";
import BentoItem from "@/UI/bento";

import Button from "../UI/button";

const About = () => {
	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				<BentoItem className="col-span-1">
					<div className="flex flex-col justify-between h-full">
						<div className="text-2xl custom-gradient-text">{constants.EXPERIENCE}</div>
						<div className="text-7xl custom-gradient-text">
							9<span className="text-4xl">+</span>
						</div>
						<p className="custom-bento-text">{constants.EXPERIENCE_DESCRIPTION}</p>
					</div>
				</BentoItem>
				<BentoItem className="col-span-2">
					<div className="flex flex-col justify-between h-full">
						<div className="text-2xl custom-gradient-text">{constants.TECHNICAL_LEADERSHIP}</div>
						<p className="custom-bento-text">{constants.TECHNICAL_LEADERSHIP_DESCRIPTION}</p>
					</div>
				</BentoItem>
				<BentoItem className="col-span-2">
					<div className="flex flex-col justify-between h-full">
						<div className="text-2xl custom-gradient-text">Skills</div>
					</div>
				</BentoItem>
				<BentoItem className="col-span-3">
					<div>Tech Stack</div>
					<div></div>
				</BentoItem>
				<BentoItem className="col-span-1">
					<div>About Me</div>
				</BentoItem>
				<BentoItem className="col-span-2">
					<div>Tech Enthusiast</div>
				</BentoItem>
				<BentoItem className="col-span-2">
					<div className="text-2xl custom-gradient-text">
						{constants.CONTACT_ME} <span className="text-4xl">👋🏻</span>{" "}
					</div>
					<p className="mt-2 text-xl text-slate-50">
						{constants.CONTACT_ME_DESCRIPTION} <span className="text-2xl">💬</span>
					</p>
					<a href="#contact_me">
						<Button label={constants.CONTACT_ME_BUTTON} />
					</a>
				</BentoItem>
				<BentoItem className="col-span-1">
					<div className="text-2xl custom-gradient-text">Hello</div>
				</BentoItem>
			</div>
		</div>
	);
};

export default About;
