import DynamicGrid from "@/components/ui/dynamic-grid";
import ItemCard from "@/components/ui/item-card";
import type { Playlist } from "@/types";

export default function PlaylistCardsContainer({
  title,
  items,
  to,
}: {
  title: string;
  items: Playlist[];
  to: string;
}) {
  return <DynamicGrid<Playlist> title={title} items={items} to={to} Component={ItemCard} />;
}
