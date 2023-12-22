import { memo } from 'react';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

interface Properties {
  type?: 'button' | 'switch';
  switchControl?: boolean;
  tooltipText?: string;
  children: React.ReactNode | undefined;
  className?: string;
  onClick: () => void;
}

const ControlButton = memo(function ControlButtonComponent({
  type,
  switchControl = false,
  tooltipText,
  children,
  className,
  onClick,
}: Properties) {
  return (
    <TooltipWrapper tooltipText={tooltipText}>
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
          className={`flex items-center justify-center rounded-full p-2 ${
            switchControl ? 'text-green-500 hover:text-green-400' : 'text-zinc-400 hover:text-zinc-100'
          } ${className}`}
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
});

ControlButton.displayName = 'ControlButton';

export default ControlButton;
