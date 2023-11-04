export default function ControlButton({
  type,
  switchControl = false,
  children,
  className,
  onClick,
}: {
  type?: 'button' | 'switch';
  switchControl?: boolean;
  children: React.ReactNode | undefined;
  className?: string;
  onClick: () => void;
}) {
  return (
    <>
      {type === 'button' ? (
        <button
          onClick={onClick}
          className={'flex items-center justify-center rounded-full p-2 text-zinc-400 hover:text-zinc-100 ' + className}
        >
          {children}
        </button>
      ) : type === 'switch' ? (
        <button
          onClick={onClick}
          className={
            'flex items-center justify-center rounded-full p-2 ' + switchControl
              ? 'text-zinc-400 hover:text-zinc-100 '
              : 'text-green-500 hover:text-green-400 ' + className
          }
        >
          {children}
        </button>
      ) : (
        <button onClick={onClick} className={'flex items-center justify-center rounded-full p-2 ' + className}>
          {children}
        </button>
      )}
    </>
  );
}
