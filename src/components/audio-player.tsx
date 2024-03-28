/* eslint-disable jsx-a11y/media-has-caption */
const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

export default function AudioPlayer(): JSX.Element {
  return <audio id="audio-player" preload="auto" src={source} hidden />;
}
