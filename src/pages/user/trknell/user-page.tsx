import ArtistCardsContainer from './components/artist-cards-container';
import PlaylistCardsContainer from './components/playlist-cards-container';
import UserHeader from './components/user-header';

const data = {
  user: {
    name: 'Emre Can',
    image: 'https://i.scdn.co/image/ab6775700000ee858778531a91e035bbc08f0940',
    playlistCount: 10,
    followers: 68,
    following: 68,
  },
  publicPlaylists: [
    {
      order: 1,
      id: '1234567890',
      title: 'der Abgrund',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa337071a340b0e047bf94619ce',
      followers: 0,
    },
    {
      order: 2,
      id: '1234567891',
      title: 'Non-Metal',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa36282e924a6d8a0baadd8ed29',
      followers: 21,
    },
    {
      order: 3,
      id: '1234567892',
      title: 'ꟼЯΘGЯ3$$!Λ3',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa37749a7e90cdd39e65a5e049a',
      followers: 4,
    },
    {
      order: 4,
      id: '1234567893',
      title: 'bassın öne eğilmesin',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa3db8df7c19eae3eb57af2ce6c',
      followers: 1,
    },
    {
      order: 5,
      id: '1234567894',
      title: 'bir tüketim nesnesi olarak podcast',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa3c596d55bae09ceaf8c18379d',
      followers: 6,
    },
    {
      order: 6,
      id: '1234567895',
      title: 'D E A T H M E T A L',
      image: 'https://i2o.scdn.co/image/ab67706c0000cfa31d70efaec4f6644fcb3738d0',
      followers: 3,
    },
  ],
};

export default function UserPage() {
  return (
    <div className="flex flex-col pt-4 *:w-full">
      <UserHeader {...data.user} />
      <div className="flex flex-col px-1">
        <ArtistCardsContainer
          title="Top artists this month"
          items={data.publicPlaylists}
          description="Only visible to you"
        />
        <PlaylistCardsContainer title="Public Playlists" items={data.publicPlaylists} name={data.user.name} />
      </div>
    </div>
  );
}
