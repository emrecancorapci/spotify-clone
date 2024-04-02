import { useMemo } from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type TooltipSide = 'bottom' | 'left' | 'right' | 'top';

interface Properties {
  children: React.ReactNode;
  side?: TooltipSide;
  sideOffset?: number;
  tooltipContent?: React.ReactNode | string | undefined;
}

export default function TooltipWrapper({ children, side, sideOffset, tooltipContent }: Properties): React.ReactNode {
  const isContentEmpty = tooltipContent === undefined || tooltipContent === '' || tooltipContent === null;
  const defaultOffset = 8;

  const memoizedTooltipContent = useMemo(() => {
    if (isContentEmpty) return;
    return tooltipContent;
  }, [isContentEmpty, tooltipContent]);

  return isContentEmpty ? (
    <>{children}</>
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        className="rounded border-0 bg-s-gray-darker p-1 px-2 text-white"
        side={side ?? 'top'}
        sideOffset={sideOffset ?? defaultOffset}
      >
        {memoizedTooltipContent}
      </TooltipContent>
    </Tooltip>
  );
}
