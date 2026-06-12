import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const containerRef = useRef(null)

  const projects = [
    { id: 1, src: "public/WorkImages/Work--1.png", title: "Core System v1", category: "Engine Framework", year: "2026" },
    { id: 2, src: "public/WorkImages/Work--2.jpg", title: "Hyperion Interface", category: "Spatial UI", year: "2026" },
    { id: 3, src: "public/WorkImages/Work--3.jpg", title: "Neural Pipeline", category: "Data Architecture", year: "2025" },
    { id: 4, src: "public/WorkImages/Work--4.jpg", title: "Vector Vault", category: "Digital Asset Hub", year: "2025" },
    { id: 5, src: "public/WorkImages/Work--5.jpg", title: "Synthetic Sync", category: "Automation Core", year: "2025" },
    { id: 6, src: "public/WorkImages/Work--6.jpg", title: "Apex Module", category: "Hardware Matrix", year: "2025" },
    { id: 7, src: "public/WorkImages/Work--7.jpg", title: "Spectra Node", category: "Web3 Network", year: "2025" },
    { id: 8, src: "public/WorkImages/Work--8.jpg", title: "Nexus Shield", category: "Cyber Infrastruct", year: "2025" },
    { id: 9, src: "public/WorkImages/Work--9.jpg", title: "Omni Render", category: "Graphics Core", year: "2024" },
    { id: 10, src: "public/WorkImages/Work--10.jpg", title: "Pulse Engine", category: "Dynamic Content", year: "2024" },
    { id: 11, src: "public/WorkImages/Work--11.jpg", title: "Chronos Ledger", category: "Cryptography", year: "2024" },
    { id: 12, src: "public/WorkImages/Work--12.jpg", title: "Void Space", category: "Minimalist Studio", year: "2024" },
    { id: 13, src: "public/WorkImages/Work--13.jpg", title: "Quantum Deck", category: "Terminal OS", year: "2024" },
    { id: 14, src: "public/WorkImages/Work--14.jpg", title: "Matrix Portal", category: "Interactive Gateway", year: "2024" },
    { id: 15, src: "public/WorkImages/Work--15.avif", title: "Helios Grid", category: "Energy Topology", year: "2024" },
    { id: 16, src: "public/WorkImages/Work--16.jpg", title: "K72 Core Alpha", category: "Genesis Launch", year: "2024" },
  ]

  useGSAP(() => {
    gsap.fromTo('.title-reveal',
      { y: "100%", rotateX: -40, opacity: 0 },
      { y: 0, rotateX: 0, opacity: 1, duration: 1.4, ease: "power4.out" }
    )

    const isMobile = window.innerWidth < 768

    const cards = document.querySelectorAll('.work-card')
    cards.forEach((card, index) => {
      const isEven = index % 2 === 0
      gsap.fromTo(card,
        { y: isMobile ? 40 : (isEven ? 80 : 160), opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: isMobile ? false : 1
          }
        }
      )
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-[#0c0c0c] text-white min-h-screen w-full font-sans overflow-x-hidden selection:bg-[#d2f54c] selection:text-black">

      {/* HERO SECTION */}
      <section className="h-[60vh] md:h-[80vh] w-full flex flex-col justify-end px-4 md:px-16 pb-10 md:pb-20 relative">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6">
          <div className="overflow-hidden">
            <h1 className="title-reveal text-[25vw] md:text-[22vw] lg:text-[16vw] font-bold tracking-tighter leading-none uppercase flex items-start origin-bottom">
              Work
              <span className="text-[0.25em] font-mono font-light tracking-normal text-[#d2f54c] ml-2 mt-3 md:ml-3 md:mt-4 select-none bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] md:text-xs h-fit md:text-sm">
                [{projects.length}]
              </span>
            </h1>
          </div>
          <p className="text-xs md:text-sm font-mono text-gray-400 max-w-xs tracking-tight border-l border-white/20 pl-3 md:pl-4 mb-0 md:mb-2">
            An production archive of scalable design ecosystems, spatial interactive builds, and high-performance engineering pipelines.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="w-full px-4 md:px-16 pb-24 md:pb-48 bg-black">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-24 lg:gap-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`work-card group w-full flex flex-col relative cursor-pointer ${
                index % 2 !== 0 ? "md:mt-32" : ""
              }`}
            >
              <div className="w-full h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] rounded-2xl md:rounded-3xl lg:rounded-[48px] overflow-hidden relative bg-[#111] border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:rounded-[16px] md:group-hover:rounded-[24px] lg:group-hover:rounded-[32px] group-hover:border-white/20">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src={project.src}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5 md:p-8">
                  <div className="bg-white text-black text-xs font-mono font-medium tracking-wider uppercase px-4 md:px-5 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    Explore Engine
                    <span className="text-sm md:text-base font-sans font-bold group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 w-full flex justify-between items-start px-1 md:px-2">
                <div className="space-y-1">
                  <h3 className="text-base md:text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#d2f54c]">
                    {project.title}
                  </h3>
                  <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {project.category}
                  </p>
                </div>
                <span className="text-[10px] md:text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-2 md:px-3 py-1 rounded-md">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full pt-16 md:pt-32 pb-8 md:pb-12 px-4 md:px-16 bg-[#0c0c0c] border-t border-white/10 relative flex flex-col justify-between">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-24 items-center">

          <div className="md:col-span-6 space-y-3 md:space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tighter leading-none">
              Have a visionary concept <br />
              <span className="text-[#d2f54c]">to execute?</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-sm">
              We align deep performance engineering with modern aesthetic clarity to produce high-value web engines.
            </p>
          </div>

          <div className="md:col-span-6 flex md:justify-end">
            <a
              href="/contacts"
              className="group relative px-8 md:px-10 py-4 md:py-5 overflow-hidden rounded-full border border-white/20 text-white font-medium tracking-tight uppercase text-sm transition-all duration-300 hover:border-[#d2f54c] active:scale-95 bg-black inline-block"
            >
              <span className="absolute inset-0 w-full h-full bg-[#d2f54c] transition-all duration-300 translate-y-full group-hover:translate-y-0"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center gap-3">
                Initialize Transmission
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </span>
            </a>
          </div>

        </div>

        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-xs font-mono text-gray-600 border-t border-white/5 pt-8">
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} K72 ARCHIVE.</span>
            <span className="text-white/10">|</span>
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <a href="/" className="hover:text-white transition-colors duration-200 uppercase tracking-widest">&larr; Return Main Engine</a>
        </div>
      </footer>

    </div>
  )
}

export default Work