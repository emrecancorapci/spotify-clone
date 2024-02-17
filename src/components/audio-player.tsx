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

  useEffect(
    function loadAudio() {
      if (audioReferece.current == undefined || audioSource == undefined) return;
      if (audioReferece.current.src === audioSource) return;

      const audio = audioReferece.current;

      audio.src = audioSource;
      audio.load();

      if (isPlaying) {
        void audio.play();
      } else {
        dispatch(togglePlay());
      }
    },
    [dispatch, audioSource, isPlaying],
  );

  useEffect(
    function setVolume() {
      if (audioReferece.current == undefined) return;

      audioReferece.current.volume = volume;
    },
    [volume],
  );

  useEffect(
    function setMuted() {
      if (audioReferece.current == undefined) return;

      audioReferece.current.muted = isMuted;
    },
    [isMuted],
  );

  useEffect(
    function setPlay() {
      if (audioReferece.current == undefined) return;

      const audio = audioReferece.current;

      if (isPlaying) void audio.play();
      else void audio.pause();
    },
    [isPlaying],
  );

  useEffect(
    function setCurrentTime() {
      if (audioReferece.current == undefined || audioReferece.current.currentTime === currentTime) return;

      audioReferece.current.currentTime = currentTime;
    },
    [currentTime],
  );

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
