import { cva, type VariantProps } from 'class-variance-authority';
import { PlayIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex items-center justify-center rounded-full bg-s-green text-black hover:bg-s-green-light',
  {
    variants: {
      size: {
        sm: 'size-[40px] hover:size-[42px]',
        md: 'size-[48px] hover:size-[50px]',
        lg: 'size-[56px] hover:size-[58px]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface ButtonProperties extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export default function PlayButton({ className, size, ...properties }: ButtonProperties): React.ReactNode {
  return (
    <button className={cn(buttonVariants({ size, className }))} {...properties}>
      <PlayIcon size={24} />
    </button>
  );
}
