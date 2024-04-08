import { cva } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

import ControlButton from './control-button';

interface Properties {
  className?: string;
  switchControl?: boolean;
  tooltipText?: string;
  size?: number;
  Icon: LucideIcon;
  onClick: () => void;
}

const buttonVariants = cva('', {
  variants: {
    switchControl: {
      true: 'text-s-green hover:text-s-green-light',
      false: 'text-s-gray-lighter hover:text-s-gray-lightest',
    },
  },
});

function ControlSwitchComponent({
  className,
  switchControl = false,
  size = 18,
  tooltipText,
  Icon,
  onClick,
}: Properties) {
  return (
    <ControlButton
      className={cn(buttonVariants({ switchControl, className }))}
      Icon={Icon}
      onClick={onClick}
      size={size}
      tooltipText={tooltipText}
    />
  );
}

const ControlSwitch = memo(ControlSwitchComponent);

ControlSwitch.displayName = 'ControlSwitch';

export default ControlSwitch;
