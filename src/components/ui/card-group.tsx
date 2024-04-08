import { Link } from 'react-router-dom';

import { useAppControllerStore } from '@/features/appControllerStore';

interface Properties<T> {
  title: string;
  items: T[];
  toMore?: string;
  Component: (properties: T) => React.ReactNode;
}

const cardSizePx = 180;

const getGridStyle = (columnCount: number) => {
  return {
    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
  };
};

export default function CardGroup<T>({ title, items, toMore, Component }: Properties<T>): React.ReactNode {
  const width = useAppControllerStore((state) => state.mainWidth);

  const columnCount = Math.floor(width / cardSizePx);

  return (
    <div>
      <div className="flex w-full items-center justify-between px-3.5 py-2">
        <Link to={toMore ?? '/'}>
          <button type="button" className="text-2xl font-bold text-white no-underline hover:underline">
            {title}
          </button>
        </Link>
        <Link to={toMore ?? '/'}>
          <button
            type="button"
            className="box-decoration-slice text-sm font-bold text-s-gray-lighter no-underline hover:underline"
          >
            Show all
          </button>
        </Link>
      </div>
      <div style={getGridStyle(columnCount)} className="grid">
        {items.slice(0, columnCount).map((playlist, index) => (
          <Component key={index} {...playlist} />
        ))}
      </div>
    </div>
  );
}
