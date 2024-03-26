import { LibraryBig } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
import TooltipWrapper from '@/components/ui/tooltip-wrapper';
import getIconSize from '@/lib/get-icon-size';

import LibraryCard from './library-card/library-card';

export default function SidebarLibraryExplorer() {
  const iconProperties = getIconSize('l', true);
  const libraries = [
    { name: 'Liked Songs', songCount: 5123 },
    { name: 'Heavy Metal', songCount: 1643 },
    { name: 'Jazz', songCount: 64 },
    { name: 'Funk', songCount: 89 },
    { name: 'Soul', songCount: 59 },
    { name: 'Classic Rock', songCount: 113 },
    { name: 'Progressive Rock', songCount: 34 },
    { name: 'Death Metal', songCount: 120 },
    { name: 'Fusion Jazz', songCount: 20 },
    { name: 'Neo-Soul', songCount: 36 },
    { name: 'Black Metal', songCount: 76 },
    { name: 'R&B', songCount: 12 },
    { name: 'Indie Rock', songCount: 16 },
  ];

  return (
    <div className="flex w-full flex-col items-center gap-4 overflow-hidden rounded-lg bg-s-gray-darkest pt-4 text-white">
      <div>
        <TooltipWrapper side="right" tooltipContent="Expand Your Library">
          <LibraryBig
            className="text-s-gray-lighter transition-colors duration-300 hover:text-white"
            {...iconProperties}
          />
        </TooltipWrapper>
      </div>
      <ScrollArea className="flex scroll-pt-2 flex-col overflow-hidden">
        {libraries.map((library) => (
          <LibraryCard isPinned={false} key={library.name} library={library} />
        ))}
      </ScrollArea>
    </div>
  );
}
