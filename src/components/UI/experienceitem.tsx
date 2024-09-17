export interface ExperienceItemProps {
	id: number;
	startDate: string;
	endDate: string;
	title: string;
	company: string;
	description: string;
	technologies: string[];
	icon: "briefcase";
}

const ExperienceItem = ({ item }: { item: ExperienceItemProps }) => {
	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
				<h3 className="font-bold custom-gradient-text text-2xl mb-2 sm:mb-0">{item.title}</h3>
				<p className="text-sm text-gray-400">
					{item.startDate} - {item.endDate}
				</p>
			</div>
			<h4 className="mb-3 text-lg text-slate-50 ">{item.company}</h4>
			<p className="mt-4 text-sm max-w-sm leading-normal text-slate-400 mb-4">{item.description}</p>
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
