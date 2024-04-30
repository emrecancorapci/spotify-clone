import { Link } from 'react-router-dom';

import { useAppControllerStore } from '@/features/appControllerStore';
import { cn } from '@/lib/utils';

interface OrderableAndIndexable {
  id: number | string;
  order: number;
}

interface Properties<T extends OrderableAndIndexable> {
  className?: string;
  title: string;
  description?: string;
  items: T[];
  to?: string;
  Component: (properties: T) => React.ReactNode;
}

const cardSizePx = 220;

export default function DynamicGrid<T>({
  className,
  title,
  description,
  items,
  to,
  Component,
}: Properties<T extends OrderableAndIndexable ? T : never>): React.ReactNode {
  const width = useAppControllerStore((state) => state.mainWidth);

  const columnCount = Math.floor(width / cardSizePx);

  return (
    <div>
      <div className={cn('flex w-full items-center justify-between px-3.5 py-2', className)}>
        <Link to={to ?? '/'}>
          <button type="button" className="text-2xl font-bold text-white no-underline hover:underline">
            {title}
          </button>
        </Link>
        <Link to={to ?? '/'}>
          <button
            type="button"
            className="box-decoration-slice text-sm font-bold text-s-gray-lighter no-underline hover:underline"
          >
            Show all
          </button>
        </Link>
      </div>
      {description && <p className="px-3.5 text-sm text-s-gray-lighter">{description}</p>}
      <div style={getGridStyle(columnCount)}>
        {items
          .slice(0, columnCount)
          .sort((a, b) => a.order - b.order)
          .map((playlist) => (
            <Component key={playlist.id} {...playlist} />
          ))}
      </div>
    </div>
  );
}

function getGridStyle(columnCount: number): React.CSSProperties {
  return {
    display: 'grid',
    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
  };
}
