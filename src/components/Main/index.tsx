import constants from "@/helpers/constants";

import About from "./about";
import Contact from "./contact";
import Section from "./section";

const Main = () => {
	return (
		<main id="content" className="pt-24 lg:w-1/2 lg:py-20">
			<Section id="about" title="About" ariaLabel="About Me">
				<About />
			</Section>
			<Section id="experience" title="Experience" ariaLabel="Work Experience">
				Experience Section
			</Section>
			<Section id="contact_me" title={constants.PROJECT} ariaLabel="Contact Me">
				<Contact />
			</Section>
		</main>
	);
};

export default Main;
