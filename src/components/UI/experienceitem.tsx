import { MapPin } from "lucide-react";

export interface ExperienceItemProps {
	id: number;
	startDate: string;
	endDate: string;
	title: string;
	company: string;
	description: string[];
	technologies: string[];
	icon: "briefcase";
	location: string;
}

const ExperienceItem = ({ item }: { item: ExperienceItemProps }) => {
	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
				<h3 className="font-bold custom-gradient-text text-2xl">{item.title}</h3>
				<p className="custom-text">
					{item.startDate} - {item.endDate}
				</p>
			</div>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
				<h4 className="text-lg text-slate-50 ">{item.company}</h4>
				<p className="flex custom-text">
					<MapPin className="w-4 h-4 text-gray-400 mt-0.5 sm:max-lg:mt-1" />
					<span className="ml-1">{item.location}</span>
				</p>
			</div>

			<div className="custom-text my-4 max-w-md leading-normal">
				{item.description.map((desc, _idx) => (
					<p className="mb-1">{desc}</p>
				))}
			</div>
			<div className="flex flex-wrap gap-2">
				{item.technologies.map((tech, techIndex) => (
					<span
						key={tech}
						className="px-2 py-1 bg-gray-700 text-buttonbg text-xs font-medium rounded-full"
					>
						{tech}
					</span>
				))}
			</div>
		</>
	);
};

export default ExperienceItem;
