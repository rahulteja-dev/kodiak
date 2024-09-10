const NavItem = ({ label, href }: { label: string; href: string }) => {
	return (
		<li>
			<a className="group flex items-center py-3" href={`#${href}`}>
				<span className="mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-20 group-hover:bg-slate-50 group-focus-visible:w-20 group-focus-visible:bg-slate-50 motion-reduce:transition-none"></span>
				<span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:custom-gradient-text group-focus-visible:custom-gradient-text">
					{label}
				</span>
			</a>
		</li>
	);
};
export default NavItem;
