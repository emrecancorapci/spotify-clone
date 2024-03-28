import { create } from 'zustand';

interface PlayerControllerStore {
  isPanelExpanded?: boolean;
  isDetailsOpen: boolean;
  setPanel: (setTo: boolean) => void;
  toggleDetails: () => void;
}

export const useAppControllerStore = create<PlayerControllerStore>(function playerControllerStore(set) {
  return {
    isPanelExpanded: false,
    isDetailsOpen: false,
    setPanel: (setTo: boolean) => set((state) => ({ ...state, isPanelExpanded: setTo })),
    toggleDetails: () => set((state) => ({ ...state, isDetailsOpen: !state.isDetailsOpen })),
  };
});
