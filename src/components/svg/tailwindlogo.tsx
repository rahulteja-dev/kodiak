import React from "react";

interface TailwindCSSLogoProps {
	width?: number;
	height?: number;
}

export default function TailwindCSSLogo({ width = 256, height = 154 }: TailwindCSSLogoProps = {}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 400 400"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-label="Tailwind CSS logo"
		>
			<defs>
				<linearGradient id="tailwindGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" style={{ stopColor: "rgb(251, 139, 36)", stopOpacity: 1 }} />
					<stop offset="100%" style={{ stopColor: "rgb(233, 220, 201)", stopOpacity: 1 }} />
				</linearGradient>
			</defs>
			<path
				d="M201.286 69.577C147.704 69.577 114.594 96.066 101.403 149.043C121.403 122.554 144.515 112.732 170.737 119.276C184.048 122.82 193.87 133.031 204.081 143.632C222.692 162.854 244.193 184.966 300.621 184.966C354.203 184.966 387.313 158.477 400.504 105.5C380.504 131.989 357.392 141.811 331.17 135.267C317.859 131.723 308.037 121.512 297.826 110.911C279.215 91.689 257.714 69.577 201.286 69.577ZM101.403 184.966C47.821 184.966 14.711 211.455 1.52 264.432C21.52 237.943 44.632 228.121 70.854 234.665C84.165 238.209 93.987 248.42 104.198 259.021C122.809 278.243 144.31 300.355 200.738 300.355C254.32 300.355 287.43 273.866 300.621 220.889C280.621 247.378 257.509 257.2 231.287 250.656C217.976 247.112 208.154 236.901 197.943 226.3C179.332 207.078 157.831 184.966 101.403 184.966Z"
				fill="url(#tailwindGradient)"
			/>
		</svg>
	);
}
