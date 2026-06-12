import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useContext, useRef, useEffect } from "react";
import { NavbarContext } from "../Context/NavContext";

const FullScreenNav = () => {
  const fullScreenRef = useRef(null)
  const timelineRef = useRef(null)
  const isMobile = useRef(false)

  const { navOpen, setNavOpen } = useContext(NavbarContext)

  useEffect(() => {
    isMobile.current = window.innerWidth < 768
  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true })

    tl.to(fullScreenRef.current, {
      display: 'block',
      duration: 0
    })
    tl.to('.stairing', {
      height: '100%',
      stagger: { amount: 0.3 },
      duration: 0.4
    })
    tl.to('.navlink', {
      opacity: 1,
      rotateX: 0,
      stagger: { amount: 0.3 },
      duration: 0.4
    }, "-=0.2")

    timelineRef.current = tl
  }, { scope: fullScreenRef })

  useGSAP(() => {
    if (navOpen) {
      timelineRef.current?.play()
    } else {
      timelineRef.current?.reverse()
    }
  }, [navOpen])

  useGSAP(() => {
    const mobile = window.innerWidth < 768
    if (mobile) return

    const links = gsap.utils.toArray('.link');
    links.forEach((link) => {
      const moveLink = link.querySelector('.movelink');
      const moveXElements = link.querySelectorAll('.moveX');

      gsap.set(moveLink, { yPercent: 100, opacity: 0 });

      const marqueeTween = gsap.to(moveXElements, {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
        paused: true
      });

      const onMouseEnter = () => {
        gsap.to(moveLink, { yPercent: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
        marqueeTween.play();
      };
      const onMouseLeave = () => {
        gsap.to(moveLink, { yPercent: 100, opacity: 0, duration: 0.3, ease: "power2.in" });
        marqueeTween.pause();
      };

      link.addEventListener('mouseenter', onMouseEnter);
      link.addEventListener('mouseleave', onMouseLeave);
    });
  }, { scope: fullScreenRef });

  return (
    <div
      ref={fullScreenRef}
      id="full-screen"
      className="fullscreen h-screen w-screen overflow-hidden z-50 absolute"
      style={{ display: 'none' }}
    >
      <div className="h-screen w-full fixed">
        <div className="h-screen w-full flex">
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
          <div className="stairing h-0 w-1/5 bg-black"></div>
        </div>
      </div>

      <div className="relative navlink opacity-0" style={{ transform: "rotateX(90deg)" }}>
        <div className="flex w-full justify-between items-start">
          <div className="p-3">
            <svg
              onClick={() => setNavOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-[80px] h-[32px] md:w-[130px] md:h-[50px]"
              viewBox="0 0 103 44"
            >
              <path fill="white" fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
          </div>

          <div
            onClick={() => setNavOpen(false)}
            className="h-16 w-16 md:h-29 md:w-27 m-2 relative flex items-center justify-center cursor-pointer group"
          >
            <svg
              className="w-full h-full text-white stroke-current transition-transform duration-300 group-hover:scale-105"
              viewBox="0 0 100 100"
              fill="none"
              strokeWidth="2"
            >
              <line x1="0" y1="0" x2="100" y2="100" />
              <line x1="100" y1="0" x2="0" y2="100" />
            </svg>
          </div>
        </div>

        <div id="all-links" className="pt-1 md:pt-2">

          <a href="/Work" className="link border-y border-gray-400 relative block cursor-pointer overflow-hidden">
            <h1 className="text-white font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
              Work
            </h1>
            <div className="movelink absolute flex top-0 left-0 text-black bg-[#d2f54c] w-full h-full pointer-events-none">
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  see everything
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Projectiamge2.jpg" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  see everything
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/ProjectImage1.png" alt="" />
              </div>
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  see everything
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Projectiamge2.jpg" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  see everything
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/ProjectImage1.png" alt="" />
              </div>
            </div>
          </a>

          <a href="/Agency" className="link border-y border-gray-400 relative block cursor-pointer overflow-hidden">
            <h1 className="text-white font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
              Agency
            </h1>
            <div className="movelink absolute flex top-0 left-0 text-black bg-[#d2f54c] w-full h-full pointer-events-none">
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Know Us
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Agency --1.avif" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Know Us
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Agency --2.avif" alt="" />
              </div>
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Know Us
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Agency --1.avif" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Know Us
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Agency --2.avif" alt="" />
              </div>
            </div>
          </a>

          <a href="/Contacts" className="link border-y border-gray-400 relative block cursor-pointer overflow-hidden">
            <h1 className="text-white font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
              Contacts
            </h1>
            <div className="movelink absolute flex top-0 left-0 text-black bg-[#d2f54c] w-full h-full pointer-events-none">
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Send Us A Fax
                </h2>
                <svg className="h-10 md:h-[6rem] w-auto fill-current shrink-0 self-center mx-4" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Send Us A Fax
                </h2>
                <svg className="h-10 md:h-[6rem] w-auto fill-current shrink-0 self-center mx-4" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Send Us A Fax
                </h2>
                <svg className="h-10 md:h-[6rem] w-auto fill-current shrink-0 self-center mx-4" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Send Us A Fax
                </h2>
                <svg className="h-10 md:h-[6rem] w-auto fill-current shrink-0 self-center mx-4" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>
          </a>

          <div className="link border-y border-gray-400 relative block cursor-pointer overflow-hidden">
            <h1 className="text-white font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
              Blog
            </h1>
            <div className="movelink absolute flex top-0 left-0 text-black bg-[#d2f54c] w-full h-full pointer-events-none">
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Read Articles
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Bloge Image 2.jpg" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Read Articles
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Bloge Vedio 1.gif" alt="" />
              </div>
              <div className="moveX flex items-center gap-4 md:gap-6 h-full">
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Read Articles
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Bloge Image 2.jpg" alt="" />
                <h2 className="whitespace-nowrap font-sans font-medium text-center text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] pb-2 md:pb-4 tracking-tight leading-[0.8] uppercase">
                  Read Articles
                </h2>
                <img className="h-16 md:h-23 w-40 md:w-63 object-cover rounded-full shrink-0" src="../../../public/Images/NavImages/Bloge Vedio 1.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;