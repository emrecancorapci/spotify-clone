interface Properties {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function SidebarCard({ children, className }: Properties): JSX.Element {
  return (
    <div
      className={`flex w-full flex-col items-center gap-6 rounded-lg bg-s-gray-darkest py-4 text-white ${className}`}
    >
      {children}
    </div>
  );
}
