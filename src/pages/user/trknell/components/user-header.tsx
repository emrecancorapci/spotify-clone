import { DotIcon } from 'lucide-react';

interface UserHeaderProperties {
  image: string;
  name: string;
  playlistCount: number;
  followers: number;
  following: number;
}

export default function UserHeader({ image, name, playlistCount, followers, following }: UserHeaderProperties) {
  return (
    <div className="flex flex-1 flex-row gap-6 px-4">
      <img
        className="size-[240px] rounded-full shadow-[0_0_16px_16px_rgba(0,0,0,0.2)]"
        src={image}
        alt={`${name}'s profile`}
      />
      <div className="flex flex-col justify-end gap-6 text-s-white">
        <div className="flex flex-col justify-end pt-2">
          <h1 className="ps-px text-sm">Profile</h1>
          <h2 className="text-8xl font-bold">{name}</h2>
        </div>
        <div className="flex flex-row items-end">
          <span className="text-s-gray-lighter">{playlistCount} Public Playlists</span>
          <DotIcon className="pb-1" size={14} strokeWidth={4} />
          {followers} Followers
          <DotIcon className="pb-1" size={14} strokeWidth={4} />
          {following} Following
        </div>
      </div>
    </div>
  );
}
