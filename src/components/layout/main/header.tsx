import { BellIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import TooltipWrapper from '@/components/ui/tooltip-wrapper';

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const username = 'Emre Can';

  return (
    <div className="flex justify-between px-4">
      <div className="flex flex-row items-center gap-2">
        <TooltipWrapper tooltipContent="Go back" side="bottom">
          <button
            className="flex size-8 items-center justify-center rounded-full bg-black/70 text-white"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="relative -left-px" strokeWidth={1} size={32} />
          </button>
        </TooltipWrapper>
        <TooltipWrapper tooltipContent="Go forward" side="bottom">
          <button
            className="flex size-8 items-center justify-center rounded-full bg-black/70 text-white"
            onClick={() => navigate(1)}
          >
            <ChevronRightIcon className="relative left-px" strokeWidth={1} size={32} />
          </button>
        </TooltipWrapper>
      </div>

      <div className="flex h-9 flex-row items-center">
        <TooltipWrapper tooltipContent="What's New" side="bottom">
          <div className="flex size-9 items-center justify-center">
            <button
              className="flex size-8 items-center justify-center rounded-full bg-black/50 text-s-gray-lighter hover:size-9 hover:text-white"
              onClick={() => navigate('/feed')}
            >
              <BellIcon strokeWidth={2} size={18} />
            </button>
          </div>
        </TooltipWrapper>

        <TooltipWrapper tooltipContent={username} side="bottom">
          <div className="flex size-9 items-center justify-center">
            <div className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/50 hover:size-[33px] hover:bg-black/70">
              <img
                src="https://via.placeholder.com/32"
                width={24}
                height={24}
                alt="avatar"
                className="size-6 rounded-full"
              />
            </div>
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
}
