import PlaylistCard from './playlist-card';

interface Properties {
  title: string;
  playlists: {
    title: string;
    description: string;
    image: string;
  }[];
  columnCount: number;
}

const getGridStyle = (columnCount: number) => {
  return {
    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
  };
};

export default function PlaylistsBlock({ title, playlists, columnCount }: Properties) {
  return (
    <div>
      <div className="flex w-full justify-between px-3.5">
        <button type="button" className="py-2 text-2xl font-bold text-white">
          {title}
        </button>
        <button
          type="button"
          className="box-decoration-slice text-sm font-bold text-s-gray-lighter no-underline hover:underline"
        >
          Show all
        </button>
      </div>
      <div style={getGridStyle(columnCount)} className="grid">
        {playlists.slice(0, columnCount).map((playlist, index) => (
          <PlaylistCard key={index} {...playlist} />
        ))}
      </div>
    </div>
  );
}
