import { Corner, Root, ScrollAreaScrollbar, ScrollAreaThumb, Viewport } from '@radix-ui/react-scroll-area';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const ScrollArea = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, children, ...properties }, reference) => (
    <Root ref={reference} className={cn('relative overflow-hidden', className)} {...properties}>
      <Viewport className="size-full rounded-[inherit]">{children}</Viewport>
      <ScrollBar />
      <Corner />
    </Root>
  ),
);
ScrollArea.displayName = Root.displayName;

const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...properties }, reference) => (
  <ScrollAreaScrollbar
    ref={reference}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className,
    )}
    {...properties}
  >
    <ScrollAreaThumb className="relative flex-1 rounded-full bg-s-gray-lighter/50 hover:bg-s-gray-light/50 dark:bg-zinc-800" />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
