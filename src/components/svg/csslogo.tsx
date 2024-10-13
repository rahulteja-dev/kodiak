interface CSSLogoProps {
	width?: number;
	height?: number;
}

export default function CSSLogo({ width = 200, height = 200 }: CSSLogoProps = {}) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
			<title>CSS3 Logo (Black Text and Accents)</title>
			<defs>
				<linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" stopColor="rgb(251, 139, 36)" />
					<stop offset="100%" stopColor="rgb(233, 220, 201)" />
				</linearGradient>
			</defs>
			<path fill="url(#htmlGradient)" d="M71,460 L30,0 481,0 440,460 255,512" />
			<path fill="url(#htmlGradient)" d="M256,472 L405,431 440,37 256,37" />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" transform="scale(2)">
				<path
					fill="#000000"
					d="M75.67 268.22l4.07 45.4h101.62v-45.4zM181.36 176.3H67.07l4.13 45.4h110.16zM181.36 433.4v-47.25l-.2.06-50.58-13.66-3.23-36.22h-45.6l6.36 71.3 93.05 25.83z"
				/>
			</svg>

			{/* <path
				fill="#000"
				d="M283.73 268.22l8.2-90.92H181.36v45.4h63.42l-4.1 45.52h-59.32v45.4h55.52l-5.23 58.6-50.29 13.57v47.25l92.48-25.65 .68-7.62 10.6-118.86 1.1-12.1 8.2-91.6z"
			/> */}
		</svg>
	);
}
