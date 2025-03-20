/* eslint-disable react/prop-types */
import { forwardRef, useEffect } from "react";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import {
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const PlayerControl = forwardRef(function PlayerControl(
  {
    toggleFullscreen,
    isFullscreen,
    player,
    isPlaying,
    duration,
    currentTime,
    setCurrentTime,
  },
  ref
) {
  // const togglePlayPause = () => {
  //   if (player) {
  //     if (isPlaying) {
  //       player.pauseVideo();
  //     } else {
  //       player.playVideo();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  const moveForward10 = () => {
    if (player && duration) {
      const newTime = Math.min(parseFloat(currentTime + 10), parseFloat(duration));
      player.seekTo(newTime, true);
      setCurrentTime(newTime);
    }
  };
  
  const moveBackward10 = () => {
    if (player) {
      const newTime = Math.max(parseFloat(currentTime - 10), 0.0);
      player.seekTo(newTime, true);
      setCurrentTime(newTime);
    }
  };

  // const handleProgressChange = (e) => {
  //   if (player && duration) {
  //     const newTime = (parseFloat(e.target.value) / 100) * duration;
  //     player.seekTo(newTime, true);
  //     setCurrentTime(newTime);
  //   }
  // };

  useEffect(() => {
    if(player){
      if (isPlaying) {
        player.pauseVideo();
        player.seekTo(parseFloat(15));
      }
    }
  }, [player, isPlaying]);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full px-4 py-2 flex flex-col gap-2">
        {/* <input
          ref={ref}
          type="range"
          className="w-full"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleProgressChange}
        /> */}
        <div className="w-full flex items-center justify-center text-white">
          <div className="w-1/2 justify-end flex gap-3">
            <button onClick={moveBackward10}>
              <MdSkipPrevious color="white" size="2rem" />
            </button>
            {/* <button onClick={togglePlayPause}>
              {isPlaying ? <FaPause size="1.2rem" /> : <FaPlay size="1.2rem" />}
            </button> */}
            <button onClick={moveForward10}>
              <MdSkipNext color="white" size="2rem" />
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-2 ml-auto">
            <button
              onClick={toggleFullscreen}
              className="flex focus:outline-none"
            >
              {isFullscreen ? <FaCompress /> : <FaExpand />}
            </button>
          </div>
        </div>
        {/* <div className="w-full flex items-center justify-center text-white">
          <button onClick={togglePlayPause} className="focus:outline-none">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <span className="text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          <button
            onClick={toggleFullscreen}
            className="flex focus:outline-none justify-self-end"
          >
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
        </div> */}
      </div>
    </div>
  );
});

export default PlayerControl;
