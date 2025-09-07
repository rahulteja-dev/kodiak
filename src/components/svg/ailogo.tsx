import React from "react";

const AILogo = ({ width = 200, height = 200 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
			<title>AI/ML Logo with Gradient</title>
			<defs>
				<linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<g fill="url(#aiGradient)">
				<circle cx="7" cy="12" r="2" />
				<circle cx="17" cy="12" r="2" />
				<path d="M7 14c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zM17 14c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" />
				<path d="M12 3.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM12 7c-1.657 0-3 1.343-3 3v2h6v-2c0-1.657-1.343-3-3-3z" />
				<path d="M5 7L7 5M19 7L17 5M12 2V3.5" />
			</g>
		</svg>
	);
};

export default AILogo;
