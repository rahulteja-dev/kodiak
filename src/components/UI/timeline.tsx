import { Briefcase } from "lucide-react";

import type { ExperienceItemProps } from "./experienceitem";

import Card from "./card";
import ExperienceCard from "./experienceitem";

interface ExperienceTimelineProps {
	items: ExperienceItemProps[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
	return (
		<div className="container mx-auto">
			<div className="relative pl-3 ml-6">
				<div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-foreground to-gradientwhite"></div>
				{items.map((item, _) => (
					<div key={item.id} className="mb-12 last:mb-0">
						<div className="absolute left-0 flex items-center justify-center w-10 h-10 -translate-x-1/2 bg-background rounded-full border-2 border-buttonbg">
							<Briefcase className="w-5 h-5 text-slate-50" />
						</div>
						<div className="ml-6 mr-6 sm:max-lg:ml-8 lg:ml-10">
							<Card width="max-w-2xl sm:max-lg:max-w-full">
								<ExperienceCard item={item} />
							</Card>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
