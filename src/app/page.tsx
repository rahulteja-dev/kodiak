import Header from "@/components/header";

export default function Home() {
	return (
		<div className="text-foreground mx-auto min-h-screen max-w-screen-xl px-1 py-12 font-inter md:px-4 md:py-20 lg:px-8 lg:py-0">
			<div className="lg:flex lg:justify-between lg:gap:4">
				<Header />
				<main id="content" className="pt-24 lg:w-1/2 lg:py-20">
					<section id="about" className="h-96">
						About Section
					</section>
					<section id="services" className="h-96">
						Services Section
					</section>
					<section id="projects" className="h-96">
						Projects Section
					</section>
					<section id="blog" className="h-96">
						Blogs Section
					</section>
					<section id="experience" className="h-96">
						Expericnce Section
					</section>
					<section id="contact" className="h-96">
						Contact Section
					</section>
				</main>
			</div>
		</div>
	);
}
