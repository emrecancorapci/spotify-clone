import CardGroup from '../../components/ui/card-group';
import PlaylistCard from './playlist-card';

interface Playlist {
  title: string;
  description: string;
  image: string;
}

const Playlists: Playlist[] = [
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

const PlaylistGroup = CardGroup<Playlist>;

export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col px-3">
      <PlaylistGroup title="First Playlist Bundle" items={Playlists} Component={PlaylistCard} />
      <PlaylistGroup title="Second Playlist Bundle" items={Playlists} Component={PlaylistCard} />
      <PlaylistGroup title="Second Playlist Bundle" items={Playlists} Component={PlaylistCard} />
      <PlaylistGroup title="Second Playlist Bundle" items={Playlists} Component={PlaylistCard} />
      <PlaylistGroup title="Second Playlist Bundle" items={Playlists} Component={PlaylistCard} />
    </div>
  );
}
