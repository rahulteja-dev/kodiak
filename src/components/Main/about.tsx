import constants from "@/helpers/constants";
import Card from "@/UI/card";

const About = () => {
	return (
		<div className="container mx-auto px-5">
			<div className="custom-text mb-10">
				<p className="mb-4">
					I'm a Computer Science Engineer with 12+ years of experience in software development. As{" "}
					<span className="font-bold custom-gradient-text">Team Lead and Full Stack Architect</span>{" "}
					at{" "}
					<a
						className="font-bold text-slate-50 hover:text-buttonbg focus-visible:text-buttonbg"
						href="https://www.lenskart.com"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="Lenskart.com"
					>
						Lenskart.com
					</a>
					, I spearhead the development of scalable architecture while building sophisticated{" "}
					<span className="font-bold custom-gradient-text">
						{" "}
						AI-powered applications and full-stack solutions
					</span>{" "}
					that deliver tangible business results.{" "}
				</p>
				<p className="mb-4">
					My expertise spans creating{" "}
					<span className="font-bold custom-gradient-text">
						{" "}
						AI agents, intelligent chatbots, and developing comprehensive web applications
					</span>{" "}
					that transform how businesses operate. I focus on crafting software that's not only
					technically excellent but strategically valuable—optimizing performance, integrating
					advanced capabilities, and designing scalable systems that drive growth.
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 auto-rows-[minmax(200px,auto)]">
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.TEAM_PLAYER}</div>
					<p className="bento-text">{constants.TEAM_PLAYER_DESC}</p>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.AI_CAPABILITIES}</div>
					<p className="bento-text">{constants.AI_CAPABILITIES_DESC}</p>
				</Card>
				<Card className="col-span-1 sm:col-span-2 row-span-1 group" width="max-w-full">
					<div className="bento-title">Tech Stack</div>
					<div className="mt-5 flex flex-wrap gap-2">
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							React
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							Next.js
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							TypeScript
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							Node.js
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							Express.js
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							PostgreSQL
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							Docker
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							AWS
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							Python
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							LangChain
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							LangGraph
						</span>
						<span className="px-3 py-1.5 bg-gray-800 text-buttonbg text-sm font-medium rounded-full">
							CrewAI
						</span>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div>
						<div className="bento-title">{constants.EXPERIENCE}</div>
						<div className="text-7xl custom-gradient-text">
							{constants.NINE}
							<span className="text-4xl">{constants.PLUS}</span>
						</div>
						<p className="custom-text mt-1">{constants.EXPERIENCE_DESCRIPTION}</p>
					</div>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.BACKEND_EXPERTISE}</div>
					<p className="bento-text">{constants.BACKEND_EXPERTISE_DESC}</p>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.SCALABLE_ARCHITECTURE}</div>
					<p className="bento-text">{constants.SCALABLE_ARCHITECTURE_DESC}</p>
				</Card>
				<Card className="col-span-1 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.SNAG_SOLVER}</div>
					<p className="bento-text">{constants.SNAG_SOLVER_DESC}</p>
				</Card>
				<Card className="col-span-1 sm:col-span-2 row-span-1 group" width="max-w-full">
					<div className="bento-title">{constants.TECHNICAL_LEADERSHIP}</div>
					<p className="bento-text">{constants.TECHNICAL_LEADERSHIP_DESCRIPTION}</p>
				</Card>
			</div>
		</div>
	);
};

export default About;
