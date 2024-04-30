/* eslint-disable jsx-a11y/media-has-caption */
import OtherControls from './footer/other-controls';
import PlayerController from './footer/player-controller';
import TrackDisplayer from './footer/track-displayer';

const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function Footer(): React.ReactNode {
  return (
    <div className="flex flex-row items-center justify-between p-2 pb-3">
      <TrackDisplayer />
      <PlayerController />
      <OtherControls />
      <audio id="audio-player" preload="auto" src={source} hidden />
    </div>
  );
}
