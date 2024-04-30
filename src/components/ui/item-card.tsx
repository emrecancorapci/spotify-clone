import { cva } from 'class-variance-authority';
import { useCallback, useState } from 'react';

import PlayButton from '@/components/ui/play-button';

interface Properties {
  image?: string;
  title: string;
  followers?: string | number;
  description?: string;
  isArtist?: boolean;
  showFollowers?: boolean;
}

const imageVariants = cva('aspect-square w-full object-cover shadow-lg shadow-black/50', {
  variants: {
    isArtist: {
      true: 'rounded-full',
      false: 'rounded-lg',
    },
  },
  defaultVariants: {
    isArtist: false,
  },
});

const truncateStyle: React.CSSProperties = {
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default function ItemCard({ image, title, description, isArtist }: Properties): React.ReactNode {
  const [imageSize, setImageSize] = useState<number>(0);

  const imageReference = useCallback(function sizeChangeHandler(node: HTMLImageElement) {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setImageSize(node.clientWidth);
    });

    resizeObserver.observe(node);
  }, []);

  return (
    <div className="group relative flex flex-col rounded-lg bg-transparent p-3 hover:cursor-pointer hover:bg-white/10">
      <img
        ref={imageReference}
        className={imageVariants({ isArtist })}
        src={image ?? 'https://via.placeholder.com/256'}
        height={256}
        width={256}
        alt="playlist"
      />
      <div className="absolute flex size-14 items-center justify-center" style={getButtonPositionStyle(imageSize)}>
        <PlayButton className="translate-y-2 opacity-0 shadow transition-[opacity,transform] duration-200 ease-in group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
      <p className="max-w-full truncate pb-2 ps-2 pt-3 leading-none text-white">{title}</p>
      {description ? (
        <p style={truncateStyle} className="ps-2 text-sm leading-tight text-s-gray-lighter">
          {description}
        </p>
      ) : (
        <div className="h-5"></div>
      )}
    </div>
  );
}

function getButtonPositionStyle(imageSize: number): React.CSSProperties {
  const buttonSizePx = 48;
  return {
    top: `calc(${imageSize}px - ${buttonSizePx - 4}px)`,
    left: `calc(${imageSize}px - ${buttonSizePx - 4}px)`,
  };
}
