import React from "react";

const PythonLogo = ({ width = 200, height = 200 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
			<title>Python Logo with Gradient</title>
			<defs>
				<linearGradient id="pythonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<path
				fill="url(#pythonGradient)"
				d="M12.002 2c-2.265 0-3.999.909-3.999 2.432v1.996h4.088v.404H6.706c-1.035 0-1.938.516-2.354 1.326-.44.854-.664 1.527-.664 2.685 0 .841.174 1.658.494 2.42.56 1.328 1.387 2.304 2.524 2.304h1.408v-2.068c0-1.211.989-2.282 2.194-2.282h3.984c.977 0 1.76-.806 1.76-1.785V4.432C16.052 2.91 14.267 2 12.002 2zm-2.193 1.162a.662.662 0 1 1 0 1.324.662.662 0 0 1 0-1.324z"
			/>
			<path
				fill="url(#pythonGradient)"
				d="M16.58 8.646v1.957c0 1.263-1.024 2.337-2.286 2.337h-3.984c-.998 0-1.76.851-1.76 1.849v4.779c0 1.522 1.734 2.432 3.999 2.432 2.265 0 3.999-.909 3.999-2.432v-1.996h-4.088v-.404h5.385c1.035 0 1.938-.516 2.354-1.326.44-.854.664-1.527.664-2.685 0-.841-.174-1.658-.494-2.42-.56-1.328-1.387-2.304-2.524-2.304H16.58v.213zm-2.402 11.192a.662.662 0 1 1 0 1.324.662.662 0 0 1 0-1.324z"
			/>
		</svg>
	);
};

export default PythonLogo;
