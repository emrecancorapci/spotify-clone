import { create } from 'zustand';

interface PlayerControllerStore {
  mainWidth: number;
  isPanelExpanded?: boolean;
  isDetailsOpen: boolean;
  setMainWidth: (width: number) => void;
  setPanel: (setTo: boolean) => void;
  toggleDetails: () => void;
}

export const useAppControllerStore = create<PlayerControllerStore>(function playerControllerStore(set) {
  return {
    mainWidth: 0,
    isPanelExpanded: false,
    isDetailsOpen: false,
    setMainWidth: (width: number) => set((state) => ({ ...state, mainWidth: width })),
    setPanel: (setTo: boolean) => set((state) => ({ ...state, isPanelExpanded: setTo })),
    toggleDetails: () => set((state) => ({ ...state, isDetailsOpen: !state.isDetailsOpen })),
  };
});
