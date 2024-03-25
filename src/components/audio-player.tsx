/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { selectAudioPlayerStates } from '@/features/player-controller/player-controller-selectors';
import { setCurrentTime, setDuration, togglePlay } from '@/features/player-controller/player-controller-slice';
import { useTypedSelector } from '@/store';

export default function AudioPlayer(): JSX.Element {
  const dispatch = useDispatch();
  const { audioSource, isPlaying } = useTypedSelector(selectAudioPlayerStates);

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
    function setPlay() {
      if (audioReferece.current == undefined) return;

      const audio = audioReferece.current;

      if (isPlaying) void audio.play();
      else void audio.pause();
    },
    [isPlaying],
  );

  return (
    <audio
      id="audio-player"
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
