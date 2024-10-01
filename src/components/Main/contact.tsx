import constants from "@/helpers/constants";

import BadgePing from "../UI/badgePing";
import Button from "../UI/button";

const Contact = () => {
	return (
		<div className="mx-5">
			{/* <div className="text-3xl leading-normal text-slate-50 max-w-md">{constants.PROJECT}</div> */}
			<div className="custom-text leading-normal mt-2 max-w-md">
				{constants.PROJECT_DESCRIPTION}
			</div>
			<div>
				<div className="flex space-x-2">
					<a href="mailto:rahulteja.dev@gmail.com">
						<Button label={constants.PROJECT_BUTTON} />
					</a>
					<span className="hidden text-slate-50 mt-6 text-4xl">{constants.OR}</span>
					<a
						target="_blank"
						href="https://calendly.com/rahulteja-dev/30min"
						rel="noopener noreferrer"
					>
						<Button label={constants.PROJECT_BUTTON_SECONDARY} />
					</a>
				</div>
				<div className="flex">
					<div className="flex justify-center mt-6 ml-2">
						<BadgePing />
					</div>
					<div className="custom-text ml-3 mt-3 text-slate-50">
						{constants.PROJECT_BADGE_PING}
						<span className="text-2xl">👨🏻‍💻</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
