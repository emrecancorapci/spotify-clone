export default function ControlButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode | undefined;
  className?: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className={'flex items-center justify-center rounded-full p-2 ' + className}>
      {children}
    </button>
  );
}
