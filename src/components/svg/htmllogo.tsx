import React from "react";

const HTMLLogo = ({ width = 200, height = 200 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
			<title>HTML5 Logo with Gradient</title>
			<defs>
				<linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<path fill="url(#htmlGradient)" d="M71,460 L30,0 481,0 440,460 255,512" />
			<path fill="url(#htmlGradient)" d="M256,472 L405,431 440,37 256,37" />
			<path
				fill="#000000"
				d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265z"
			/>
			<path
				fill="#000000"
				d="M256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"
			/>
			<path
				fill="#000000"
				d="M256,265 L336,265 329,338 256,355 256,414 372,382 373,372 385,223 387,208 371,208 256,208z"
			/>
			<path
				fill="#000000"
				d="M256,94 L256,129 256,150 256,150 392,150 392,150 392,150 393,138 396,109 397,94z"
			/>
		</svg>
	);
};

export default HTMLLogo;
