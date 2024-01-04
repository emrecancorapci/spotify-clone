import { PinIcon } from 'lucide-react';

interface Properties {
  library: {
    name: string;
    image?: string;
    songCount: number;
  };
  isPinned: boolean;
  isCollapsed?: boolean;
}

export default function LibraryCard({
  library: { name, image, songCount },
  isPinned,
  isCollapsed = true,
}: Properties): JSX.Element {
  const iconProperties = { strokeWidth: 2.5, size: 26 };

  return (
    <div className="rounded-lg p-2 transition-colors duration-300 hover:bg-zinc-800">
      <div className="flex items-center gap-2">
        <div className="h-12 w-12 shrink-0 rounded bg-zinc-700" style={{ backgroundImage: `url(${image})` }} />
        {isCollapsed ? undefined : (
          <div className="flex flex-col">
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-zinc-500">
              {isPinned ? <PinIcon {...iconProperties} /> : undefined} {songCount} songs
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
