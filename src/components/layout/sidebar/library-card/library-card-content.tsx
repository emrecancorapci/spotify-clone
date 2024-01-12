import { PinIcon } from 'lucide-react';

export default function LibraryCardContent({
  isPinned,
  name,
  songCount,
}: {
  isPinned: boolean;
  name: string;
  songCount: number | string;
}) {
  return (
    <div className="flex flex-col">
      <div className="text-base leading-none">{name}</div>
      <div className="flex flex-row items-end gap-2 py-1">
        {isPinned ? <PinIcon className="text-s-green" size={14} strokeWidth={2} /> : undefined}{' '}
        <p className="text-base leading-none text-s-gray-light">{songCount} songs</p>
      </div>
    </div>
  );
}