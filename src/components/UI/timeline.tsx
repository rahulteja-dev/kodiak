import { Briefcase } from "lucide-react";

import Card from "./card";
import ExperienceCard from "./experienceitem";

export interface TimelineItem {
	id: number;
	startDate: string;
	endDate: string;
	title: string;
	company: string;
	description: string;
	technologies: string[];
	icon: "briefcase";
}

interface ExperienceTimelineProps {
	items: TimelineItem[];
}

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
	return (
		<div className="container mx-auto">
			<div className="relative pl-6 ml-6 sm:ml-0">
				<div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-foreground to-gradientwhite"></div>
				{items.map((item, _) => (
					<div key={item.id} className="mb-12 last:mb-0">
						<div className="absolute left-0 flex items-center justify-center w-10 h-10 -translate-x-1/2 bg-background rounded-full border-2 border-buttonbg">
							<Briefcase className="w-5 h-5 text-slate-50" />
						</div>
						<div className="ml-6 sm:ml-12">
							<Card width="max-w-lg">
								<ExperienceCard item={item} />
							</Card>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
