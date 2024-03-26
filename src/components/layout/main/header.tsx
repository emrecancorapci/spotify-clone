import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-row gap-2">
        <button
          className="flex items-center justify-center rounded-full bg-black/70 text-white"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="relative -left-px" strokeWidth={1} size={32} />
        </button>
        <button
          className="flex items-center justify-center rounded-full bg-black/70 text-white"
          onClick={() => navigate(1)}
        >
          <ChevronRightIcon className="relative left-px" strokeWidth={1} size={32} />
        </button>
      </div>
    </div>
  );
}
