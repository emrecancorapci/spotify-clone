import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { memo } from 'react';

function ControlButtonComponent({
  type,
  switchControl = false,
  tooltipText,
  children,
  className,
  onClick,
}: {
  type?: 'button' | 'switch';
  switchControl?: boolean;
  tooltipText?: string;
  children: React.ReactNode | undefined;
  className?: string;
  onClick: () => void;
}) {
  const TooltipWrapper = ({ children }: { children: React.ReactNode }) =>
    tooltipText !== undefined && tooltipText.length > 0 ? (
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={8} className="rounded border-0 bg-zinc-800 p-1 px-2 text-white">
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    ) : (
      <>{children}</>
    );

  return (
    <TooltipWrapper>
      {type === 'button' ? (
        <button
          onClick={onClick}
          className={'flex items-center justify-center rounded-full p-2 text-zinc-400 hover:text-zinc-100 ' + className}
        >
          {children}
        </button>
      ) : type === 'switch' ? (
        <button
          onClick={onClick}
          className={
            'flex items-center justify-center rounded-full p-2 ' + switchControl
              ? 'text-zinc-400 hover:text-zinc-100 '
              : 'text-green-500 hover:text-green-400 ' + className
          }
        >
          {children}
        </button>
      ) : (
        <button onClick={onClick} className={'flex items-center justify-center rounded-full p-2 ' + className}>
          {children}
        </button>
      )}
    </TooltipWrapper>
  );
}

const ControlButton = memo(ControlButtonComponent);
ControlButton.displayName = 'ControlButton';

export default ControlButton;
