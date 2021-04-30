import {Composition} from 'remotion';
import {Message} from './Message';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Message"
				component={Message}
				durationInFrames={600}
				fps={60}
				width={1920}
				height={1080}
			/>
		</>
	);
};
