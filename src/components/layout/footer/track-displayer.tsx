import { HeartIcon } from 'lucide-react';
import { useState } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import getIconSize from '@/lib/get-icon-size';

const currentSong = {
  album: 'Album Name',
  albumCover: 'https://picsum.photos/200',
  artist: 'Artist Name',
  name: 'Song Name',
};

const iconProperty = getIconSize('l');

export default function TrackDisplayer() {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [effects, setEffects] = useState<boolean>(false);

  return (
    <div className="flex min-w-[30vw] flex-row items-center gap-2 lg:min-w-[13vw]">
      <img alt={`${currentSong.album}'s cover`} className="size-14 rounded-md" src={currentSong.albumCover} />
      <div className="flex flex-col justify-center px-2">
        <h3 className="text-sm font-normal text-s-white">{currentSong.name}</h3>
        <h4 className="text-xs font-normal text-s-gray-lighter">{currentSong.artist}</h4>
      </div>
      <Tooltip>
        <TooltipTrigger>
          <HeartIcon
            className={`size-4 cursor-default hover:cursor-pointer ${
              isLiked ? 'text-s-green hover:text-s-green-light' : 'text-s-gray-lighter hover:text-s-gray-light'
            } ${effects ? 'animate-wiggle' : ''}`}
            onAnimationEnd={() => setEffects(false)}
            onClick={() => {
              setIsLiked(!isLiked);
              setEffects(true);
            }}
            {...iconProperty}
          />
        </TooltipTrigger>
        <TooltipContent className="border-0 bg-s-gray-dark p-1 px-2 text-white" sideOffset={16}>
          Save to Your Library
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
