import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface Properties {
  tooltipContent?: React.ReactNode | string | undefined;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  children: React.ReactNode;
}

export default function TooltipWrapper({ tooltipContent, side, sideOffset, children }: Properties): JSX.Element {
  const isContentEmpty = tooltipContent === undefined || tooltipContent === '' || tooltipContent === null;

  return (
    <>
      {isContentEmpty ? (
        <>{children}</>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent
            side={side ?? 'top'}
            sideOffset={sideOffset ?? 8}
            className="rounded border-0 bg-s-gray-darker p-1 px-2 text-white"
          >
            {tooltipContent}
          </TooltipContent>
        </Tooltip>
      )}
    </>
  );
}
