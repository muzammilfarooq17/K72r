import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

const Agency = () => {
  const mainWrapperRef = useRef(null)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imgArr = [
    '../../public/Carl_480x640.jpg',
    '../../public/Olivier_480x640.jpg',
    '../../public/CAMILLE_480X640_2.jpg',
    '../../public/ChantalG_480x640.jpg',
    '../../public/joel_480X640_3.jpg',
    '../../public/MEGGIE_480X640_2.jpg',
    '../../public/MEL_480X640.jpg',
    '../../public/Michele_480X640.jpg'
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    imgArr.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    let currentIndex = 0
    const isMobile = window.innerWidth < 768

    gsap.to(imageDivRef.current, {
      y: isMobile ? 80 : 170,
      scale: isMobile ? 1.5 : 3,
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
  }, { scope: mainWrapperRef })

  return (
    <div ref={mainWrapperRef} className="bg-[#111] text-white w-full overflow-x-hidden font-sans min-h-screen">

      <div className="relative w-full pt-20 md:pt-32 pb-20 flex flex-col items-center justify-start min-h-screen">

        <div className="w-full text-center px-4 select-none pointer-events-none z-10">
          <h1 className="text-[12vw] md:text-[10vw] font-bold uppercase tracking-tight leading-[0.85] text-white whitespace-nowrap">
            SEVEN7Y DEUX
          </h1>
        </div>

        <div
          ref={imageDivRef}
          className="w-[200px] h-[270px] sm:w-[280px] sm:h-[380px] md:w-[340px] md:h-[460px] mt-6 relative z-20 shadow-2xl transition-shadow duration-300"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover rounded-[2rem] md:rounded-[2.5rem] border border-white/5"
            src={imgArr[0]}
            alt="Dynamic Framerate Frame"
          />
        </div>

        <div className="w-full max-w-6xl px-6 md:px-16 mt-16 md:mt-24 flex justify-end">
          <div className="max-w-2xl text-left md:text-right">
            <p className="text-[0.95rem] md:text-[1.1rem] lg:text-[1.4rem] text-gray-300 leading-relaxed font-light tracking-wide">
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

      <div className="min-h-screen w-full bg-black flex items-center justify-center px-6 md:px-16 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-6xl w-full py-16 md:py-24">
          <div className="space-y-4">
            <span className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-mono text-[#d2f54c]">01 / PHILOSOPHY</span>
            <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight">Creativity Over Ego</h3>
            <p className="text-gray-500 text-sm md:text-m leading-relaxed">We strip away corporate boundaries to build impactful visual expressions that align with real human emotion.</p>
          </div>
          <div className="space-y-4">
            <span className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-mono text-[#d2f54c]">02 / VISION</span>
            <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight">Lasting Influence</h3>
            <p className="text-gray-500 text-sm md:text-m leading-relaxed">We don't design for temporary trends. Our structures are intended to build distinct long-term market authority.</p>
          </div>
          <div className="space-y-4">
            <span className="text-[4vw] sm:text-[3vw] md:text-[2vw] font-mono text-[#d2f54c]">03 / EXECUTION</span>
            <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight">Living Systems</h3>
            <p className="text-gray-500 text-sm md:text-m leading-relaxed">Brands are living identities. We design digital frameworks that adapt and transform across media landscapes.</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#111] py-16 md:py-24 flex flex-col items-center justify-center border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="text-center space-y-6 md:space-y-8 z-10 px-4">
          <p className="text-sm font-mono tracking-widest text-gray-400 uppercase">
            Finished Exploring?
          </p>

          <a
            href="/"
            className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 overflow-hidden rounded-full border border-white/20 transition-all duration-300 hover:border-[#d2f54c]"
          >
            <div className="absolute inset-0 w-full h-full bg-[#d2f54c] transition-all duration-300 translate-y-full group-hover:translate-y-0"></div>
            <span className="relative flex items-center gap-3 text-base md:text-lg font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-black">
              Back to Home
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

        <div className="mt-16 md:mt-20 text-xs font-mono text-gray-600 text-center">
          &copy; {new Date().getFullYear()}  MUZAMMIL .  All rights reserved.
        </div>
      </div>

    </div>
  )
}

export default Agency