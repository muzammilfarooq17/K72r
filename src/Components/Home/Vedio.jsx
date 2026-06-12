const Vedio = () => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source
        src="../../../public/69496b2d.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Vedio;