import BentoItem from "@/UI/bento";

import Button from "../UI/button";

const About = () => {
	return (
		<div>
			<div className="grid grid-cols-3 gap-4">
				<BentoItem className="col-span-1">
					<div className="flex flex-col justify-between h-full">
						<div className="text-2xl custom-gradient-text">Experience</div>
						<div className="text-7xl custom-gradient-text">
							9<span className="text-4xl">+</span>
						</div>
						<p className="custom-bento-text">Years of Experience in Frontend Development</p>
					</div>
				</BentoItem>
				<BentoItem className="col-span-2">
					<div className="flex flex-col justify-between h-full">
						<div className="text-2xl custom-gradient-text">Technical Leadership</div>
						<p className="custom-bento-text">
							Oversaw multiple frontend projects, successfully delivering a high volume of results
							within tight deadlines.
						</p>
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
						Got a project in mind?? <span className="text-4xl">👋🏻</span>{" "}
					</div>
					<p className="mt-2 text-xl text-slate-50">
						let's link up and talk! <span className="text-2xl">💬</span>
					</p>
					<a href="#contact_me">
						<Button label="Get in touch" />
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
