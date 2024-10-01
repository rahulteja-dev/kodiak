import constants from "@/helpers/constants";
import experienceData from "@/helpers/experienceData";

import Section from "../UI/section";
import ExperienceTimeline from "../UI/timeline";
import About from "./about";
import Contact from "./contact";

const Main = () => {
	return (
		<main id="content" className="pt-14 lg:w-1/2 lg:py-20">
			<Section id="about" title="About" ariaLabel="About Me">
				<About />
			</Section>
			<Section id="experience_me" title="Experience" ariaLabel="Work Experience">
				<ExperienceTimeline items={experienceData} />
			</Section>
			<Section id="contact_me" title={constants.PROJECT} ariaLabel="Contact Me">
				<Contact />
			</Section>
		</main>
	);
};

export default Main;
