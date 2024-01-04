interface Properties {
  children: React.ReactNode | React.ReactNode[];
  gap?: number;
}

export default function SidebarCard({ children }: Properties): JSX.Element {
  return (
    <div className={`flex w-full flex-col items-center gap-6 rounded-lg bg-zinc-900 py-4 text-white`}>{children}</div>
  );
}
