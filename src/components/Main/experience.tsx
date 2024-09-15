import { Briefcase } from "lucide-react";

import type { ExperienceItemProps } from "../UI/experienceitem";

import Card from "../UI/card";
import ExperienceItem from "../UI/experienceitem";

interface ExperienceListProps {
	items: ExperienceItemProps[];
}

export default function ExperienceList({ items }: ExperienceListProps) {
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
								<ExperienceItem item={item} />
							</Card>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
