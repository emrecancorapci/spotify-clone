import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

const song = {
  name: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  albumCover: 'https://picsum.photos/200',
};

export default function SongInfo() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [effects, setEffects] = useState<boolean>(false);

  const iconProperty = { strokeWidth: 2.5, size: 26 };
  return (
    <div className="flex min-w-max flex-row items-center gap-2">
      <img src={song.albumCover} alt={`${song.album}'s cover`} className="h-14 w-14 rounded-md" />
      <div className="flex flex-col justify-center px-2">
        <h3 className="text-sm font-normal text-white">{song.name}</h3>
        <h4 className="text-xs font-normal text-zinc-400">{song.artist}</h4>
      </div>
      <div>
        <HeartIcon
          onClick={() => {
            setIsLiked(!isLiked);
            setEffects(true);
          }}
          onAnimationEnd={() => setEffects(false)}
          className={`h-4 w-4 cursor-default hover:cursor-pointer ${
            isLiked ? 'text-green-500 hover:text-green-400' : 'text-zinc-400 hover:text-zinc-300'
          } ${effects ? 'animate-wiggle' : ''}`}
          {...iconProperty}
        />
      </div>
    </div>
  );
}
