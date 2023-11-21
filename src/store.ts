import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import playerControllerReducer from './features/player-controller/player-controller-slice';
import appControllerReducer from './features/app-controller/app-controller-slice';

export const store = configureStore({
  reducer: {
    playerController: playerControllerReducer,
    appController: appControllerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
