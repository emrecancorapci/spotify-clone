/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentTime, setDuration, togglePlay } from '@/features/player-controller/player-controller-slice';
import { selectAudioPlayerStates, useTypedSelector } from '@/store';

interface Properties {
  src: string;
}

export default function AudioPlayer({ src }: Properties): JSX.Element {
  const dispatch = useDispatch();
  const { audioSource, volume, isMuted, isPlaying } = useTypedSelector(selectAudioPlayerStates);
  const audioReferece = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioReferece.current === null || audioSource === undefined) return;

    const audio = audioReferece.current;

    audio.src = audioSource;
    audio.load();
    dispatch(togglePlay());
  }, [dispatch, audioSource]);

  useEffect(() => {
    if (audioReferece.current === null || volume === undefined) return;

    const audio = audioReferece.current;

    audio.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (audioReferece.current === null || isMuted === undefined) return;

    const audio = audioReferece.current;

    audio.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (audioReferece.current === null || isPlaying === undefined) return;

    const audio = audioReferece.current;

    if (isPlaying) void audio.play();
    else void audio.pause();
  }, [isPlaying]);

  return (
    <audio
      ref={audioReferece}
      preload="auto"
      src={src}
      hidden
      onLoadedMetadata={() => {
        dispatch(setDuration(audioReferece.current?.duration ?? 0));

        setInterval(() => {
          dispatch(setCurrentTime(audioReferece.current?.currentTime ?? 0));
        }, 1000);
      }}
    />
  );
}
