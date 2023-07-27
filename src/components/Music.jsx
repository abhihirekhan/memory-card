import backgroundMusic from "../assets/backgroundMusic.mp3";
import { useState, useRef,useEffect } from "react";

function Music() {
  const [music, setMusic] = useState(true);
  const audioRef = useRef(null);

  const playMusic = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (music) {
        audioElement.pause();
        setMusic(false);
      } else {
        audioElement.play();
        setMusic(true);
      }
    }
  };
  useEffect(() => {
    playMusic();
  }, []);
  
console.log(music);
  return (
    <div className="musicArea">
      <audio ref={audioRef} src={backgroundMusic}  autoPlay loop />
      <button className="musicButton" onClick={playMusic}>
        {music ? (
          <span className="material-symbols-outlined">pause</span>
        ) : (
          <span className="material-symbols-outlined">play_arrow</span>
        )}
      </button>
    </div>
  );
}

export default Music;
