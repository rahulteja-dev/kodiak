import constants from "@/helpers/constants";

import BadgePing from "../UI/badgePing";
import { Button } from "../UI/button";

const Contact = () => {
	return (
		<div>
			<div className="text-4xl leading-normal text-slate-50 max-w-md">{constants.PROJECT}</div>
			<div className="text-lg leading-normal text-slate-400 mt-2 max-w-md">
				{constants.PROJECT_DESCRIPTION}
			</div>
			<div>
				<div className="flex space-x-6">
					<Button label={constants.PROJECT_BUTTON} />
					<span className="text-slate-50 mt-8">{constants.OR}</span>
					<a
						target="_blank"
						href="https://calendly.com/rahulteja-dev/30min"
						rel="noopener noreferrer"
					>
						<Button label={constants.PROJECT_BUTTON_SECONDARY} />
					</a>
				</div>
				<div className="flex">
					<div className="flex justify-center mt-5">
						<BadgePing color="slate-50" />
					</div>
					<div className="text-lg ml-2 mt-3 text-slate-50">{constants.PROJECT_BADGE_PING}</div>
				</div>

				<div className="flex space-x-6 mt-2"></div>
			</div>
		</div>
	);
};

export default Contact;
