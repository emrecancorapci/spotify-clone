/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { selectAudioPlayerStates } from '@/features/player-controller/player-controller-selectors';
import { setCurrentTime, setDuration, togglePlay } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

export default function AudioPlayer(): JSX.Element {
  const dispatch = useDispatch();
  const { audioSource, currentTime, isMuted, isPlaying, volume } = useTypedSelector(selectAudioPlayerStates);

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

    audioReferece.current.volume = volume;
  }, [volume]);

  // Mute or unmute the audio
  useEffect(() => {
    if (audioReferece.current === null || isMuted === undefined) return;

    audioReferece.current.muted = isMuted;
  }, [isMuted]);

  // Play or pause the audio
  useEffect(() => {
    if (audioReferece.current === null || isPlaying === undefined) return;

    const audio = audioReferece.current;

    if (isPlaying) void audio.play();
    else void audio.pause();
  }, [isPlaying]);

  // Set the current time of the audio
  useEffect(() => {
    if (
      audioReferece.current === null ||
      currentTime === undefined ||
      audioReferece.current.currentTime === currentTime
    )
      return;

    audioReferece.current.currentTime = currentTime;
  }, [currentTime]);

  return (
    <audio
      hidden
      onLoadedMetadata={() => {
        dispatch(setDuration(audioReferece.current?.duration ?? 0));

        setInterval(() => {
          dispatch(setCurrentTime(audioReferece.current?.currentTime ?? 0));
        }, 1000);
      }}
      preload="auto"
      ref={audioReferece}
      src={source}
    />
  );
}
