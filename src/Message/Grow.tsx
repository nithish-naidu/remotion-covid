import {useCurrentFrame} from 'remotion';

export const Grow: React.FC<{message: string}> = ({message}) => {
	const frame = useCurrentFrame();
	const opacity = frame >= 90 ? 1 : frame / 90;

	const containerStyle = {
		alignSelf: 'center',
		justifySelf: 'center',
		letterSpacing: '12px',
		padding: '0.50em 1.5em',
		margin: '0 auto',
		opacity: opacity,
	};

	return <div style={containerStyle}>{message}</div>;
};
