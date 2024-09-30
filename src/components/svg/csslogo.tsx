interface CSSLogoProps {
	width?: number;
	height?: number;
}

export default function CSSLogo({ width = 512, height = 512 }: CSSLogoProps = {}) {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 512 512"
			xmlns="http://www.w3.org/2000/svg"
			fill="#fff"
			stroke="#fff"
		>
			<g>
				<defs>
					<linearGradient id="cssGradient" x1="0%" y1="0%" x2="100%" y2="0%">
						<stop offset="0%" stopColor="rgb(251, 139, 36)" />
						<stop offset="100%" stopColor="rgb(233, 220, 201)" />
					</linearGradient>
				</defs>
				<path fill="url(#htmlGradient)" d="M71,460 L30,0 481,0 440,460 255,512" />
				<path fill="url(#htmlGradient)" d="M256,472 L405,431 440,37 256,37" />
				<polygon
					style={{ fill: "#000" }}
					points="311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 369.597,176.305 255.843,176.305 255.843,221.716 319.831,221.716 315.699,268.217 255.843,268.217 255.843,313.627 "
					id="polygon3005"
					transform="matrix(0.15557406,0,0,0.15557392,185.82204,723.82646)"
				/>
			</g>
		</svg>
	);
}
