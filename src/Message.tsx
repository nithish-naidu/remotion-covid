import { Sequence,useVideoConfig } from 'remotion';
import '../assets/font.css';
import { Grow } from './Message/Grow';
import { Reveal,RevealDirection } from './Message/Reveal';

const pageStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	backgroundColor: '#474973',
	color: '#C6D8D3',
	fontFamily: 'Lato, sans-serif',
	fontSize: '8em',
	width: '100%',
	height: '100%',
};

export const Message: React.FC<{}> = ({}) => {
	const videoConfig = useVideoConfig();

	return (
		<div style={pageStyle as React.CSSProperties}>
			<Sequence from={20} durationInFrames={120}>
				<Reveal message="MASK ON &nbsp; 😷" direction={RevealDirection.Left} />
			</Sequence>
			<Sequence from={140} durationInFrames={120}>
				<Reveal
					message="MASK OFF &nbsp; 🤒"
					direction={RevealDirection.Right}
				/>
			</Sequence>
			<Sequence from={280} durationInFrames={100}>
				<Grow message="GET VACCINATED" />
			</Sequence>
			<Sequence from={380} durationInFrames={100}>
				<Grow message="STAY SAFE" />
			</Sequence>
			<Sequence from={480} durationInFrames={videoConfig.durationInFrames}>
				<Grow message="#Unite2FightCorona" />
			</Sequence>
		</div>
	);
};
