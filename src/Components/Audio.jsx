import React, { useState } from "react";
import { Button, ProgressBar } from "react-bootstrap";

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = React.createRef();

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  const handleLoadedData = (e) => {
    setDuration(e.target.duration);
  };

  return (
    <div>
      <Button variant="primary" onClick={isPlaying ? pause : play}>
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <ProgressBar
        animated
        now={currentTime}
        max={duration}
        label={`${currentTime.toFixed(2)} / ${duration.toFixed(2)}`}
      />
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
    </div>
  );
};

export default AudioPlayer;