import DynamicGrid from '@/components/ui/dynamic-grid';
import PlaylistCard from '@/components/ui/item-card';
import { Playlist } from '@/types';

interface Properties {
  title: string;
  items: Playlist[];
  name: string;
}

export default function PlaylistCardsContainer({ title, items, name }: Properties) {
  return (
    <DynamicGrid<Playlist>
      title={title}
      items={items}
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
