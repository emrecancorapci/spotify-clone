import { create } from 'zustand';

interface PlayerControllerStore {
  isRepeat: 'all' | 'one' | 'none';
  isShuffle: boolean;
  toggleRepeat: () => void;
  toggleShuffle: () => void;
}

export const usePlayerControllerStore = create<PlayerControllerStore>(function playerControllerStore(set) {
  return {
    trackSource: '',
    isRepeat: 'none',
    isShuffle: false,
    toggleRepeat: () =>
      set((state) => {
        switch (state.isRepeat) {
          case 'none': {
            return { ...state, isRepeat: 'all' };
          }
          case 'all': {
            return { ...state, isRepeat: 'one' };
          }
          case 'one': {
            return { ...state, isRepeat: 'none' };
          }
        }
      }),
    toggleShuffle: () =>
      set((state) => ({
        ...state,
        isShuffle: !state.isShuffle,
      })),
  };
});
