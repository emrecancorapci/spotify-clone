import { useOutletContext } from 'react-router-dom';

import PlaylistBundle from './playlist-bundle';

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

export default function Home(): JSX.Element {
  const width = useOutletContext<number>();
  const cardSizePx = 200;

  const columnsNumber = Math.floor(width / cardSizePx);
  return (
    <div className="flex flex-col px-1">
      <PlaylistBundle title="First Playlist Bundle" playlists={Playlists} columnCount={columnsNumber} />
      <PlaylistBundle title="Second Playlist Bundle" playlists={Playlists} columnCount={columnsNumber} />
    </div>
  );
}
