import { memo } from 'react';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

interface Properties {
  children: React.ReactNode | undefined;
  className?: string;
  onClick: () => void;
  switchControl?: boolean;
  tooltipText?: string;
  type?: 'button' | 'switch';
}

const ControlButton = memo(function ControlButtonComponent({
  children,
  className,
  onClick,
  switchControl = false,
  tooltipText,
  type,
}: Properties) {
  return (
    <TooltipWrapper tooltipContent={tooltipText}>
      {type === 'button' ? (
        <button
          className={
            'flex items-center justify-center rounded-full p-2 text-s-gray-lighter hover:text-gray-lightest ' + className
          }
          onClick={onClick}
        >
          {children}
        </button>
      ) : type === 'switch' ? (
        <button
          className={`flex items-center justify-center rounded-full p-2 ${
            switchControl ? 'text-s-green hover:text-s-green-light' : 'text-s-gray-lighter hover:text-s-gray-lightest'
          } ${className}`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button className={'flex items-center justify-center rounded-full p-2 ' + className} onClick={onClick}>
          {children}
        </button>
      )}
    </TooltipWrapper>
  );
});

ControlButton.displayName = 'ControlButton';

export default ControlButton;
