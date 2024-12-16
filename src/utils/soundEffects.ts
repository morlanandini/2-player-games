import useSound from 'use-sound';

export const useSoundEffects = () => {
  const [playMove] = useSound('/sounds/move.mp3');
  const [playFlip] = useSound('/sounds/flip.mp3');
  const [playMatch] = useSound('/sounds/match.mp3');
  const [playWin] = useSound('/sounds/win.mp3');

  return {
    playMove,
    playFlip,
    playMatch,
    playWin
  };
};