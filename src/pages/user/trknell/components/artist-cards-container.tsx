import DynamicGrid from '@/components/ui/dynamic-grid';
import PlaylistCard from '@/components/ui/item-card';
import { Playlist } from '@/types';

interface Properties {
  title: string;
  items: Playlist[];
  description?: string;
}

export default function ArtistCardsContainer({ title, items, description }: Properties) {
  return (
    <DynamicGrid<Playlist>
      title={title}
      items={items}
      Component={(properties) => <PlaylistCard {...properties} description="Artist" isArtist />}
      description={description}
    />
  );
}
