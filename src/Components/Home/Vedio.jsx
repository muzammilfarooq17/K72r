
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
      {/* Purana relative path hatakar direct absolute public root path '/' lagaya */}
      <source
        src="/69496b2d.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Vedio;