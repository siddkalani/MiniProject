import YoutubeEmbed from "./YoutubeEmbed";

const VideoPlayerPage = () => {
  return (
    <div className="h-screen md:w-screen w-full mt-5 flex pb-32 overflow-x-hidden">
      <YoutubeEmbed videoId="1jW872CbPnU" />
    </div>
  );
};

export default VideoPlayerPage;
