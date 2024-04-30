import DynamicGrid from '@/components/ui/dynamic-grid';
import ItemCard from '@/components/ui/item-card';
import { Playlist } from '@/types';

export default function PlaylistCardsContainer({ title, items }: { title: string; items: Playlist[] }) {
  return <DynamicGrid<Playlist> title={title} items={items} Component={ItemCard} />;
}
