import { useCallback, useState } from 'react';

import PlayButton from '@/components/ui/play-button';

interface Properties {
  image?: string;
  title: string;
  description: string;
}

const buttonSizePx = 48;

const truncateStyle: React.CSSProperties = {
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

function getButtonPositionStyle(imageSize: number): React.CSSProperties {
  return {
    top: `calc(${imageSize}px - ${buttonSizePx - 4}px)`,
    left: `calc(${imageSize}px - ${buttonSizePx - 4}px)`,
  };
}

export default function PlaylistCard({ image, title, description }: Properties) {
  const [imageSize, setImageSize] = useState<number>(0);

  const imageReference = useCallback(function sizeChangeHandler(node: HTMLImageElement) {
    if (!node) return;
    const resizeObserver = new ResizeObserver(() => {
      setImageSize(node.clientWidth);
    });

    resizeObserver.observe(node);
  }, []);

  return (
    <div className="group relative flex flex-col rounded-lg bg-transparent p-3 hover:cursor-pointer hover:bg-s-gray/20">
      <img
        ref={imageReference}
        className="w-full rounded-lg object-cover shadow-lg shadow-black/50"
        src={image ?? 'https://via.placeholder.com/256'}
        height={256}
        width={256}
        alt="playlist"
      />
      <PlayButton
        style={getButtonPositionStyle(imageSize)}
        className="absolute translate-y-2 opacity-0 shadow transition-all duration-300 ease-in group-hover:translate-y-0 group-hover:opacity-100"
      />
      <p className="max-w-full truncate py-3 ps-2 leading-none text-white">{title}</p>
      <p style={truncateStyle} className="ps-2 text-sm leading-tight text-s-gray-lighter">
        {description}
      </p>
    </div>
  );
}
