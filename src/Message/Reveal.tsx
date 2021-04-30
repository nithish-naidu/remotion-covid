import {useCurrentFrame} from 'remotion';

export enum RevealDirection {
	Right,
	Left,
}

export const Reveal: React.FC<{
	message: string;
	direction: RevealDirection;
}> = ({message, direction}) => {
	const frame = useCurrentFrame();
	const opacity = frame >= 90 ? 1 : frame / 90;
	const sliderPercentage = frame > 28 ? 96 : (frame / 30) * 100;
	const slideLeft = direction == RevealDirection.Left;

	const containerStyle = {
		alignSelf: 'center',
		justifySelf: 'center',
		letterSpacing: '12px',
		padding: '0.50em 1.5em',
		margin: '0 auto',
		position: 'relative',
		overflow: 'hidden',
		opacity: opacity,
		zIndex: 1,
	};

	const sliderStyle = {
		position: 'absolute',
		left: slideLeft ? `${sliderPercentage}%` : 'unset',
		right: !slideLeft ? `${sliderPercentage}%` : 'unset',
		top: '0%',
		backgroundColor: '#161B33',
		opacity: 1,
		height: '100%',
		width: '100%',
	};

	return (
		<div style={{...(containerStyle as React.CSSProperties)}}>
			{message}
			<span
				style={{...(sliderStyle as React.CSSProperties)}}
				className="slider"
			/>
		</div>
	);
};
