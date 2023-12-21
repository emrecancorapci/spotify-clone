import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...properties }, reference) => (
  <SliderPrimitive.Root
    ref={reference}
    className={cn('group relative flex h-3 w-full touch-none rounded-full select-none items-center', className)}
    {...properties}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-zinc-600 dark:bg-zinc-50">
      <SliderPrimitive.Range className="absolute h-full bg-zinc-50 group-hover:bg-green-500 dark:bg-zinc-800 " />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full border-2 bg-white opacity-0 shadow ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:opacity-100 dark:border-zinc-50 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
