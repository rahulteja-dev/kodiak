import experienceData from "@/helpers/experienceData";

import RevealOnScroll from "../UI/reveal-on-scroll";
import Section from "../UI/section";
import ExperienceTimeline from "../UI/timeline";
import About from "./about";

const Main = () => {
	return (
		<main id="content" className="pt-10 lg:w-1/2 lg:py-20">
			<Section id="about" title="About" ariaLabel="About Me">
				<About />
			</Section>
			<Section id="experience_me" title="Experience" ariaLabel="Work Experience">
				<RevealOnScroll>
					<ExperienceTimeline items={experienceData} />
				</RevealOnScroll>
			</Section>
		</main>
	);
};

export default Main;
