import { useOutletContext } from 'react-router-dom';

import PlaylistCard from './home/playlist-card';

const Playlists = [
  {
    image: 'https://via.placeholder.com/256',
    title: 'A very long playlist name that going to be truncated',
    description: 'Very very long description to see look of second row this text',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 2',
    description: 'Description 2',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 3',
    description: 'Description 3',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 4',
    description: 'Description 4',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 5',
    description: 'Description 5',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 6',
    description: 'Description 6',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 7',
    description: 'Description 7',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 8',
    description: 'Description 8',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 9',
    description: 'Description 9',
  },
  {
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 10',
    description: 'Description 10',
  },
];

export default function Home() {
  const width = useOutletContext<number>();
  const cardSizePx = 180;

  const columnsNumber = Math.floor(width / cardSizePx);

  // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
  const gridColsStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${columnsNumber}, minmax(0, 1fr))`,
  };

  return (
    <div className="flex w-full flex-col bg-s-gray-darkest p-2">
      <p className="text-white">{columnsNumber}</p>
      <div style={gridColsStyle} className="grid gap-2">
        {Playlists.slice(0, columnsNumber).map((playlist, index) => (
          <PlaylistCard key={index} {...playlist} />
        ))}
      </div>
    </div>
  );
}
