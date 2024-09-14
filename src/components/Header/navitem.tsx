import Link from "next/link";

const NavItem = ({
	label,
	href,
	activeSection,
}: {
	label: string;
	href: string;
	activeSection: string;
}) => {
	return (
		<li>
			<Link
				className={`group flex items-center py-3 ${activeSection === href ? "active" : ""}`}
				href={`#${href}`}
			>
				<span className="nav-line mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-20 group-hover:bg-slate-50 group-focus-visible:w-20 group-focus-visible:bg-slate-50 motion-reduce:transition-none"></span>
				<span className="nav-item text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:custom-gradient-text group-focus-visible:custom-gradient-text">
					{label}
				</span>
			</Link>
		</li>
	);
};
export default NavItem;
