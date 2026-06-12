import Vedio from "./Vedio";

const TopText = () => {
  return (
    <div className="w-full text-white pt-14 md:pt-2 text-center tracking-tight select-none px-4 md:px-0">

      <div className="font-[font1] text-[11vw] sm:text-[9vw] md:text-[8.5vw] uppercase leading-[9vw] sm:leading-[7.5vw]">
        The Spark for<br />
        all{" "}
        <div className="inline-block w-[18vw] h-[11vw] sm:w-[14vw] sm:h-[8vw] align-[-1vw] sm:align-[-0.5vw] mx-1 rounded-full overflow-hidden">
          <Vedio />
        </div>{" "}
        things
      </div>

      <div className="font-[font1] text-[11vw] sm:text-[9vw] md:text-[8.5vw] uppercase leading-[9vw] sm:leading-[7.5vw] mt-1">
        Creative
      </div>

      <div className="mt-4 md:hidden text-left text-[3.2vw] sm:text-[2.5vw] leading-[5vw] sm:leading-[4vw] font-sans font-bold tracking-normal normal-case opacity-80 px-2">
        K72 is an agency that builds brands
        from every angle. Today, tomorrow and years
        from now.
      </div>

      <div className="hidden md:block absolute font-bold right-10 top-[51%] w-[20vw] text-left text-[0.9vw] leading-[1.3vw] font-sans tracking-normal normal-case opacity-80 z-10">
        K72 is an agency that builds brands
        from every angle. Today, tomorrow and years
        from now. We think the best sparks fly when
        comfort zones get left behind and friction
        infuses our strategies, brands and
        communications with real feeling. We're
        transparent, honest and say what we mean,
        and when we believe in something, we're all
        in.
      </div>

    </div>
  );
};

export default TopText;