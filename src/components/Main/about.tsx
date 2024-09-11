import BentoItem from "@/UI/bento";

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
				<BentoItem className="col-span-3">
					<div>Call To Action</div>
				</BentoItem>
			</div>
		</div>
	);
};

export default About;
