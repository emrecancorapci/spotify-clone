import { cva } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { memo } from 'react';

import getIconSize from '@/lib/get-icon-size';
import { cn } from '@/lib/utils';

import TooltipWrapper from './tooltip-wrapper';

interface Properties {
  className?: string;
  button?: boolean;
  tooltipText?: string;
  size?: number;
  Icon: LucideIcon;
  onClick: () => void;
}

const buttonVariants = cva('flex items-center justify-center rounded-full p-2', {
  variants: {
    button: {
      true: 'text-s-gray-lighter hover:text-s-gray-lightest',
    },
  },
});

const iconProperty = getIconSize();

function ControlButtonComponent({ className, button, size = 18, tooltipText, Icon, onClick }: Properties) {
  return (
    <TooltipWrapper tooltipContent={tooltipText}>
      <button className={cn(buttonVariants({ button, className }))} onClick={onClick}>
        <Icon {...iconProperty} size={size} />
      </button>
    </TooltipWrapper>
  );
}

const ControlButton = memo(ControlButtonComponent);

ControlButton.displayName = 'ControlButton';

export default ControlButton;
