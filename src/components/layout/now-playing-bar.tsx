import { HeartIcon, PauseIcon, PlayIcon, Repeat1Icon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon } from 'lucide-react';
import { useState } from 'react';

const song = {
  name: 'Song Name',
  artist: 'Artist Name',
  album: 'Album Name',
  albumCover: 'https://picsum.photos/200',
};

export default function NowPlayingBar(): JSX.Element {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [effects, setEffects] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<false | 'one' | 'all'>(false);

  const onPlay = () => setIsPlaying((state) => !state);
  const onPrevious = () => {
    console.log('Previous Song');
  };
  const onNext = () => {
    console.log('Next Song');
  };
  const onShuffle = () => setIsShuffle((state) => !state);
  const onRepeat = () =>
    setIsRepeat((state) => {
      if (!state) return 'all';
      else if (state === 'all') return 'one';
      else if (state === 'one') return false;
      else return false;
    });
  const iconProperty = { strokeWidth: 2.5, size: 26 };
  return (
    <div className="flex flex-row items-center justify-between p-2">
      <div className="flex flex-row items-center gap-2">
        <img src={song.albumCover} alt={`${song.album}'s cover`} className="h-14 w-14 rounded-md" />
        <div className="flex flex-col justify-center px-2">
          <h3 className="text-sm font-normal text-white">{song.name}</h3>
          <h4 className="text-xs font-light text-zinc-400">{song.artist}</h4>
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
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center gap-3">
          <button onClick={onShuffle} className="flex items-center justify-center rounded-full p-2">
            {isShuffle ? (
              <ShuffleIcon className="h-5 w-5 text-green-500" {...iconProperty} />
            ) : (
              <ShuffleIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
            )}
          </button>
          <button onClick={onPrevious} className="flex items-center justify-center rounded-full p-2">
            <SkipBackIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
          </button>
          <button
            onClick={onPlay}
            className="flex items-center justify-center rounded-full bg-zinc-100 p-2 transition-transform duration-100 hover:scale-105 active:scale-95"
          >
            {isPlaying ? (
              <PlayIcon className="relative left-[1px] h-5 w-5 text-black" {...iconProperty} />
            ) : (
              <PauseIcon className="h-5 w-5 text-black" {...iconProperty} />
            )}
          </button>
          <button onClick={onNext} className="flex items-center justify-center rounded-full p-2">
            <SkipForwardIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
          </button>
          <button onClick={onRepeat} className="flex items-center justify-center rounded-full p-2">
            {isRepeat === 'one' ? (
              <Repeat1Icon className="h-5 w-5 text-green-500" {...iconProperty} />
            ) : isRepeat === 'all' ? (
              <RepeatIcon className="h-5 w-5 text-green-500" {...iconProperty} />
            ) : (
              <RepeatIcon className="h-5 w-5 text-zinc-300" {...iconProperty} />
            )}
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
