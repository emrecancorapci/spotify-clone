import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface Properties {
  tooltipText?: string;
  children: React.ReactNode | undefined;
}

export default function TooltipWrapper({ tooltipText, children }: Properties): JSX.Element {
  return (
    <>
      {tooltipText !== undefined && tooltipText.length > 0 ? (
        <Tooltip>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent sideOffset={8} className="rounded border-0 bg-zinc-800 p-1 px-2 text-white">
            {tooltipText}
          </TooltipContent>
        </Tooltip>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
