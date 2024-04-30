import { Playlist } from '@/types';

import PlaylistCardsContainer from './playlist-cards-container';

const Playlists: Playlist[] = [
  {
    id: '1',
    order: 1,
    image: 'https://via.placeholder.com/256',
    title: 'A very long playlist name that going to be truncated',
    description: 'Very very long description to see look of second row this text',
    followers: 100,
  },
  {
    id: '2',
    order: 2,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 2',
    description: 'Description 2',
    followers: 100,
  },
  {
    id: '3',
    order: 3,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 3',
    description: 'Description 3',
    followers: 100,
  },
  {
    id: '4',
    order: 4,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 4',
    description: 'Description 4',
    followers: 100,
  },
  {
    id: '5',
    order: 5,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 5',
    description: 'Description 5',
    followers: 100,
  },
  {
    id: '6',
    order: 6,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 6',
    description: 'Description 6',
    followers: 100,
  },
  {
    id: '7',
    order: 7,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 7',
    description: 'Description 7',
    followers: 100,
  },
  {
    id: '8',
    order: 8,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 8',
    description: 'Description 8',
    followers: 100,
  },
  {
    id: '9',
    order: 9,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 9',
    description: 'Description 9',
    followers: 100,
  },
  {
    id: '10',
    order: 10,
    image: 'https://via.placeholder.com/256',
    title: 'Playlist 2',
    description: 'Description 2',
    followers: 100,
  },
];

export default function Home(): React.ReactNode {
  return (
    <div className="flex flex-col px-3">
      <PlaylistCardsContainer title="First Playlist Bundle" items={Playlists} />
      <PlaylistCardsContainer title="Second Playlist Bundle" items={Playlists} />
      <PlaylistCardsContainer title="Second Playlist Bundle" items={Playlists} />
      <PlaylistCardsContainer title="Second Playlist Bundle" items={Playlists} />
      <PlaylistCardsContainer title="Second Playlist Bundle" items={Playlists} />
    </div>
  );
}
