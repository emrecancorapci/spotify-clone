import SongControl from './footer/song-control';
import SongInfo from './footer/song-info';

export default function Footer(): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between p-2">
      <SongInfo />
      <SongControl />
      <div></div>
    </div>
  );
}
