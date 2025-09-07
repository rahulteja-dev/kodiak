import React from "react";

const NodeLogo = ({ width = 200, height = 200 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height}>
			<title>Node.js Logo with Gradient</title>
			<defs>
				<linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<path
				fill="url(#nodeGradient)"
				d="M12 2.073c-.322 0-.641.089-.918.257L3.235 7.088a1.831 1.831 0 0 0-.918 1.587v9.653c0 .655.353 1.26.918 1.587l7.847 4.758a1.831 1.831 0 0 0 1.835 0l7.847-4.758a1.831 1.831 0 0 0 .918-1.587V8.675c0-.655-.353-1.26-.918-1.587l-7.847-4.758A1.825 1.825 0 0 0 12 2.073zm0 1.482c.108 0 .214.03.306.086l7.847 4.758c.185.112.306.316.306.53v9.653c0 .213-.121.417-.306.53l-7.847 4.758a.612.612 0 0 1-.612 0l-7.847-4.758a.607.607 0 0 1-.306-.53V8.93c0-.214.121-.418.306-.53l7.847-4.758a.606.606 0 0 1 .306-.086z"
			/>
			<path
				fill="url(#nodeGradient)"
				d="M12 7.5a.75.75 0 0 0-.75.75v6.75a.75.75 0 0 0 1.5 0V8.25A.75.75 0 0 0 12 7.5z"
			/>
		</svg>
	);
};

export default NodeLogo;
