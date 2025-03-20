/* eslint-disable react/prop-types */
import { useEffect, useRef, useState, useCallback } from "react";
import PlayerControl from "./PlayerControl";

const YoutubePlayer = ({ videoId }) => {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [apiReady, setApiReady] = useState(false);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const loadYouTubeAPI = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (window.YT && window.YT.Player) {
        resolve();
        return;
      }

      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.onload = () => {
        window.onYouTubeIframeAPIReady = () => {
          setApiReady(true);
          resolve();
        };
      };
      tag.onerror = () => reject(new Error("Failed to load YouTube API"));
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    });
  }, []);

  const initializePlayer = useCallback(() => {
    if (!window.YT || !window.YT.Player) {
      console.error("YouTube API not available");
      return;
    }

    if (!playerRef.current) {
      console.error("Player element not available");
      return;
    }

    try {
      const newPlayer = new window.YT.Player(playerRef.current, {
        height: "100%",
        width: "100%",
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          vq: "highres",
          playsinline: 1,
          origin: window.location.origin,
          enablejsapi: 1,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: (e) => setError(`Player Error: ${e.data}`),
        },
      });
      setPlayer(newPlayer);
    } catch (err) {
      setError(`Failed to initialize player: ${err.message}`);
    }
  }, [videoId]);

  const onPlayerReady = (event) => {
    const player = event.target;
    setIsMuted(player.isMuted());
    setDuration(player.getDuration());
  };

  const onPlayerStateChange = (event) => {
    setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initYouTubePlayer = async () => {
      try {
        await loadYouTubeAPI();
        if (isMounted) {
          setApiReady(true);
        }
      } catch (err) {
        if (isMounted) {
          setError(`API Load Error: ${err.message}`);
        }
      }
    };

    initYouTubePlayer();

    return () => {
      isMounted = false;
      if (player && player.destroy) {
        player.destroy();
      }
    };
  }, [loadYouTubeAPI, player]);

  useEffect(() => {
    if (apiReady && videoId) {
      initializePlayer();
    }
  }, [apiReady, videoId, initializePlayer]);

  useEffect(() => {
    const updateTime = () => {
      if (player && player.getCurrentTime) {
        setCurrentTime(player.getCurrentTime());
      }
    };

    const timeUpdateInterval = setInterval(updateTime, 1000);

    return () => clearInterval(timeUpdateInterval);
  }, [player]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <div
      ref={containerRef}
      className="h-full overflow-hidden aspect-video relative group border border-white shadow-gray-600 shadow-lg rounded-xl"
    >
      <div
        ref={playerRef}
        className="absolute w-[300%] h-full left-[-100%] top-0"
      />
      <PlayerControl
        ref={progressBarRef}
        player={player}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        volume={volume}
        setVolume={setVolume}
        duration={duration}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
    </div>
  );
};

export default YoutubePlayer;
