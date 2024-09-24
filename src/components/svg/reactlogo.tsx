import React from "react";

const ReactLogo = ({ width = 200, height = 200 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="-11.5 -10.23174 23 20.46348"
			width={width}
			height={height}
		>
			<title>React Logo with Gradient</title>
			<defs>
				<linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<circle cx="0" cy="0" r="2.05" fill="url(#reactGradient)" />
			<g stroke="url(#reactGradient)" strokeWidth="1" fill="none">
				<ellipse rx="11" ry="4.2" />
				<ellipse rx="11" ry="4.2" transform="rotate(60)" />
				<ellipse rx="11" ry="4.2" transform="rotate(120)" />
			</g>
		</svg>
	);
};

export default ReactLogo;
