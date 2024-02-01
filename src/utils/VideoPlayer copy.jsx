const VideoPlayer = ({ src, className }) => {
  return (
    <div className="relative">
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay="ture"
      />
    </div>
  );
};
export default VideoPlayer;
