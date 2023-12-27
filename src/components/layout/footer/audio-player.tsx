/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { selectAudioPlayerStates } from '@/features/player-controller/player-controller-selectors';
import { setCurrentTime, setDuration, togglePlay } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

export default function AudioPlayer(): JSX.Element {
  const dispatch = useDispatch();
  const { audioSource, currentTime, volume, isMuted, isPlaying } = useTypedSelector(selectAudioPlayerStates);

  const audioReferece = useRef<HTMLAudioElement>(null);
  const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  // Load the audio
  useEffect(() => {
    if (audioReferece.current === null || audioSource === undefined) return;
    if (audioReferece.current.src === audioSource) return;

    const audio = audioReferece.current;

    audio.src = audioSource;
    audio.load();

    if (isPlaying) {
      void audio.play();
    } else {
      dispatch(togglePlay());
    }
  }, [dispatch, audioSource, isPlaying]);

  // Set the volume of the audio
  useEffect(() => {
    if (audioReferece.current === null || volume === undefined) return;

    const audio = audioReferece.current;

    audio.volume = volume;
  }, [volume]);

  // Mute or unmute the audio
  useEffect(() => {
    if (audioReferece.current === null || isMuted === undefined) return;

    const audio = audioReferece.current;

    audio.muted = isMuted;
  }, [isMuted]);

  // Play or pause the audio
  useEffect(() => {
    if (audioReferece.current === null || isPlaying === undefined) return;

    const audio = audioReferece.current;

    if (isPlaying) void audio.play();
    else void audio.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (audioReferece.current === null || currentTime === undefined) return;
    if (audioReferece.current.currentTime === currentTime) return;

    const audio = audioReferece.current;

    audio.currentTime = currentTime;
  }, [currentTime]);

  return (
    <audio
      ref={audioReferece}
      preload="auto"
      src={source}
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
