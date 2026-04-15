import DynamicGrid from '@/components/ui/dynamic-grid';
import PlaylistCard from '@/components/ui/item-card';
import type { Playlist } from '@/types';

interface Properties {
  title: string;
  items: Playlist[];
  name: string;
  to: string;
}

export default function PlaylistCardsContainer({ title, items, name, to }: Properties) {
  return (
    <DynamicGrid<Playlist>
      title={title}
      items={items}
      to={to}
      Component={(properties) => (
        <PlaylistCard
          {...properties}
          description={Number(properties.followers) > 0 ? `${properties.followers} Followers` : `By ${name}`}
          showFollowers
        />
      )}
    />
  );
}
