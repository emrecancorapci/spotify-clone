import { PinIcon } from 'lucide-react';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

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
  const LibraryImage = () => (
    <div className="h-12 w-12 shrink-0 rounded bg-s-gray" style={{ backgroundImage: `url(${image})` }} />
  );

  const LibraryInfo = () => (
    <div className="flex flex-col">
      <div className="text-base leading-none">{name}</div>
      <div className="flex flex-row items-end gap-2 py-1">
        {isPinned ? <PinIcon className="text-s-green" strokeWidth={2} size={14} /> : undefined}{' '}
        <p className="text-base leading-none text-s-gray-light">{songCount} songs</p>
      </div>
    </div>
  );

  return isCollapsed ? (
    <TooltipWrapper sideOffset={12} side="right" tooltipContent={<LibraryInfo />}>
      <div className="flex items-center rounded-lg p-2 transition-colors duration-300 hover:bg-s-gray-darker">
        <LibraryImage />
      </div>
    </TooltipWrapper>
  ) : (
    <div className="rounded-lg p-2 transition-colors duration-300 hover:bg-s-gray-dark">
      <div className="flex items-center gap-2">
        <LibraryImage />
        <div className="flex flex-col">
          <LibraryInfo />
        </div>
      </div>
    </div>
  );
}
