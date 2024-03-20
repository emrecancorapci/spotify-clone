interface Properties {
  image?: string;
  title: string;
  description: string;
}

const truncateStyle: React.CSSProperties = {
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default function PlaylistCard({ image, title, description }: Properties) {
  return (
    <div className="flex flex-col rounded-lg bg-transparent p-3 hover:bg-s-gray/20">
      <img
        className="w-full rounded-lg object-cover shadow-lg shadow-black/50"
        src={image ?? 'https://via.placeholder.com/256'}
        height={256}
        width={256}
        alt="playlist"
      />
      <p className="max-w-full truncate py-3 ps-2 leading-none text-white">{title}</p>
      <p style={truncateStyle} className="ps-2 text-sm leading-tight text-s-gray-lighter">
        {description}
      </p>
    </div>
  );
}
