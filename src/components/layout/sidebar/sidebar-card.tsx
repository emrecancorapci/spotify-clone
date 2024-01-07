interface Properties {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

export default function SidebarCard({ className, children }: Properties): JSX.Element {
  return (
    <div
      className={`flex w-full flex-col items-center gap-6 rounded-lg bg-s-gray-darkest py-4 text-white ${className}`}
    >
      {children}
    </div>
  );
}
