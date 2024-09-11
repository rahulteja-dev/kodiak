import About from "./about";
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
			<Section id="services" title="Services" ariaLabel="Services">
				Services Section
			</Section>
			<Section id="projects" title="Projects" ariaLabel="Worked Projects">
				Projects Section
			</Section>
			<Section id="blog" title="Blogs" ariaLabel="Blogs I've written">
				Blogs Section
			</Section>
			<Section id="contact" title="Contact" ariaLabel="Contact Me">
				Contact Section
			</Section>
		</main>
	);
};

export default Main;
