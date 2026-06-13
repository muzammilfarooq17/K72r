import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

const Agency = () => {
  const mainWrapperRef = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const textContentRef = useRef(null)

  const imgArr = [
    '/Carl_480x640.jpg',
    '/Olivier_480x640.jpg',
    '/CAMILLE_480X640_2.jpg',
    '/ChantalG_480x640.jpg',
    '/joel_480X640_3.jpg',
    '/MEGGIE_480X640_2.jpg',
    '/MEL_480X640.jpg',
    '/Michele_480X640.jpg'
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Preload Images
    imgArr.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    let currentIndex = 0
    const isMobile = window.innerWidth < 768

    // 1. Core Image Sequence & Transform Timeline
    gsap.to(imageDivRef.current, {
      y: isMobile ? 60 : 140,
      scale: isMobile ? 1.3 : 2.6,
      borderRadius: isMobile ? "24px" : "48px",
      scrollTrigger: {
        trigger: mainWrapperRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const newIndex = Math.min(
            Math.floor(self.progress * imgArr.length),
            imgArr.length - 1
          )
          if (newIndex !== currentIndex) {
            currentIndex = newIndex
            if (imageRef.current) {
              imageRef.current.src = imgArr[newIndex]
            }
          }
        }
      }
    })

    // 2. Text Content Reveal Animation on Scroll
    gsap.fromTo(textContentRef.current, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // 3. Grid Items Micro-reveal
    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.features-grid',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )

    ScrollTrigger.refresh()
  }, { scope: mainWrapperRef })

  return (
    <div ref={mainWrapperRef} className="bg-[#0a0a0a] text-white w-full overflow-x-hidden font-sans min-h-screen relative selection:bg-[#d2f54c] selection:text-black">
      
      {/* Premium Texture Overlay: Film Grain Look */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>

      {/* Hero Section */}
      <div className="relative w-full pt-24 md:pt-36 pb-20 flex flex-col items-center justify-start min-h-screen">
        
        {/* Abstract Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="w-full text-center px-4 select-none pointer-events-none z-10 relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#d2f54c]/5 rounded-full blur-[120px]"></div>
          <span className="text-xs font-mono tracking-[0.4em] text-gray-500 block mb-3 uppercase">// THE EDITORIAL LAYER</span>
          <h1 className="text-[13vw] md:text-[11vw] font-bold uppercase tracking-tighter leading-[0.8] text-white whitespace-nowrap">
            SEVEN7Y DEUX
          </h1>
        </div>

        {/* Framing & Wrapper for the Dynamic Framerate Render */}
        <div
          ref={imageDivRef}
          className="w-[220px] h-[300px] sm:w-[300px] sm:h-[400px] md:w-[360px] md:h-[480px] mt-8 relative z-20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden rounded-[2.5rem] group"
        >
          {/* Subtle Outer Neon Ring on Hover */}
          <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] group-hover:border-[#d2f54c]/30 transition-colors duration-500 z-30 pointer-events-none"></div>
          
          <img
            ref={imageRef}
            className="h-full w-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
            src={imgArr[0]}
            alt="Dynamic Framerate Frame"
          />
        </div>

        {/* Agency Copy Statement */}
        <div ref={textContentRef} className="w-full max-w-6xl px-6 md:px-16 mt-24 md:mt-32 flex justify-end">
          <div className="max-w-2xl text-left md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-8 py-2">
            <p className="text-[1rem] md:text-[1.15rem] lg:text-[1.35rem] text-gray-400 leading-relaxed font-light tracking-wide">
              Nous sommes curieux et ouverts d'esprit, et nous veillons à ce
              que la créativité prime sur l'ego. Une marque est vivante, avec
              des valeurs, une personnalité et une histoire. Si nous ignorons
              cela, nous pouvons certes obtenir un succès éphémère, mais pas
              d'influence durable. Nous apportons cette perspective à chaque
              histoire de marque que nous contribuons à raconter.
            </p>
          </div>
        </div>

      </div>

      {/* Info Core Grid Section */}
      <div className="min-h-screen w-full bg-black flex items-center justify-center px-6 md:px-16 border-t border-white/5 relative">
        <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl w-full py-24">
          
          <div className="feature-card space-y-5 bg-[#0e0e0e] p-8 rounded-3xl border border-white/[0.03] hover:border-white/10 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-gray-400 group-hover:text-black group-hover:bg-[#d2f54c] transition-all duration-300">
              01
            </div>
            <h3 className="text-xl md:text-2xl font-medium uppercase tracking-tight text-white/90 group-hover:text-[#d2f54c] transition-colors duration-300">
              Creativity Over Ego
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              We strip away corporate boundaries to build impactful visual expressions that align with real human emotion.
            </p>
          </div>

          <div className="feature-card space-y-5 bg-[#0e0e0e] p-8 rounded-3xl border border-white/[0.03] hover:border-white/10 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-gray-400 group-hover:text-black group-hover:bg-[#d2f54c] transition-all duration-300">
              02
            </div>
            <h3 className="text-xl md:text-2xl font-medium uppercase tracking-tight text-white/90 group-hover:text-[#d2f54c] transition-colors duration-300">
              Lasting Influence
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              We don't design for temporary trends. Our structures are intended to build distinct long-term market authority.
            </p>
          </div>

          <div className="feature-card space-y-5 bg-[#0e0e0e] p-8 rounded-3xl border border-white/[0.03] hover:border-white/10 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-mono text-gray-400 group-hover:text-black group-hover:bg-[#d2f54c] transition-all duration-300">
              03
            </div>
            <h3 className="text-xl md:text-2xl font-medium uppercase tracking-tight text-white/90 group-hover:text-[#d2f54c] transition-colors duration-300">
              Living Systems
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Brands are living identities. We design digital frameworks that adapt and transform across media landscapes.
            </p>
          </div>

        </div>
      </div>

      {/* Action Footer Callout */}
      <div className="w-full bg-[#0a0a0a] py-20 md:py-28 flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="text-center space-y-6 md:space-y-8 z-10 px-4">
          <p className="text-xs font-mono tracking-[0.3em] text-gray-500 uppercase">
            Finished Exploring Engine Architecture?
          </p>

          <a
            href="/"
            className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[#d2f54c] active:scale-95 shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full bg-[#d2f54c] transition-all duration-300 translate-y-full group-hover:translate-y-0"></div>
            <span className="relative flex items-center gap-3 text-base md:text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-black-core group-hover:text-black">
              Return Main Console
              <svg
                className="w-4 h-4 md:w-5 md:h-5 fill-none stroke-current transform transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-20 md:mt-24 text-[10px] font-mono tracking-widest text-gray-600 text-center uppercase">
          &copy; {new Date().getFullYear()} MUZAMMIL SYSTEMS . ALL RIGHTS PRESERVED.
        </div>
      </div>

    </div>
  )
}

export default Agency