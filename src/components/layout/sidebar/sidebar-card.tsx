interface Properties {
  children: React.ReactNode | React.ReactNode[];
  gap?: number;
}

export default function SidebarCard({ children, gap = 6 }: Properties): JSX.Element {
  const gapClass = `gap-${gap}`;
  return (
    <div className={`flex w-full flex-col items-center rounded-lg bg-zinc-900 py-4 text-white ${gapClass}`}>
      {children}
    </div>
  );
}
