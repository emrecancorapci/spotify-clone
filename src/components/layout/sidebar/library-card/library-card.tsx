import { useMemo } from 'react';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

import LibraryCardContent from './library-card-content';
import LibraryCardImage from './library-card-image';

interface Properties {
  isCollapsed?: boolean;
  isPinned: boolean;
  library: {
    image?: string;
    name: string;
    songCount: number;
  };
}

export default function LibraryCard({
  isCollapsed = true,
  isPinned,
  library: { image, name, songCount },
}: Properties): JSX.Element {
  const tooltipContent = useMemo(
    () => <LibraryCardContent isPinned={isPinned} name={name} songCount={songCount} />,
    [isPinned, name, songCount],
  );

  return isCollapsed ? (
    <TooltipWrapper side="right" sideOffset={12} tooltipContent={tooltipContent}>
      <div className="flex items-center rounded-lg p-2 transition-colors duration-300 hover:bg-s-gray-darker">
        <LibraryCardImage image={image} />
      </div>
    </TooltipWrapper>
  ) : (
    <div className="rounded-lg p-2 transition-colors duration-300 hover:bg-s-gray-dark">
      <div className="flex items-center gap-2">
        <LibraryCardImage />
        <div className="flex flex-col">{tooltipContent}</div>
      </div>
    </div>
  );
}
