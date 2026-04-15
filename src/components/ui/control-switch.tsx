import { cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import ControlButton from "./control-button";

interface Properties {
  className?: string;
  switchControl?: boolean;
  tooltipText?: string;
  size?: number;
  Icon: LucideIcon;
  onClick: () => void;
}

const buttonVariants = cva("", {
  variants: {
    switchControl: {
      true: "text-s-green hover:text-s-green-light",
      false: "text-s-gray-lighter hover:text-s-gray-lightest",
    },
  },
});

function ControlSwitch({
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

export default ControlSwitch;
