import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...properties }, reference) => (
  <SliderPrimitive.Root
    className={cn('group relative flex h-3 w-full touch-none rounded-full select-none items-center', className)}
    ref={reference}
    {...properties}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-s-gray dark:bg-s-white">
      <SliderPrimitive.Range className="absolute h-full bg-s-white group-hover:bg-s-green dark:bg-s-gray-dark " />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block size-3 rounded-full border-2 bg-s-white opacity-0 shadow ring-offset-s-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-s-gray-darkest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-hover:opacity-100 dark:border-s-white dark:bg-s-gray-darkest dark:ring-offset-s-gray-darkest dark:focus-visible:ring-s-gray-lighter" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
