import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef, useState } from "react"

const Contacts = () => {
  const containerRef = useRef(null)
  const marqueeRef = useRef(null)
  const infoSectionRef = useRef(null)

  const [form, setForm] = useState({ name: "", email: "", message: "" })

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    ScrollTrigger.refresh()

    gsap.fromTo('.hero-char',
      { y: 140, rotateX: -70, opacity: 0 },
      { y: 0, rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.08, ease: "power4.out" }
    )

    gsap.to(marqueeRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear"
    })

    const cards = gsap.utils.toArray('.info-card')
    if (cards.length > 0) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: infoSectionRef.current,
          start: "top 85%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      })
    }

    const inputs = containerRef.current.querySelectorAll('.form-input')
    const focusHandlers = []
    const blurHandlers = []

    inputs.forEach((input, index) => {
      const line = input.nextElementSibling
      
      const onFocus = () => gsap.to(line, { scaleX: 1, duration: 0.4, ease: "power2.out" })
      const onBlur = () => {
        if (!input.value) {
          gsap.to(line, { scaleX: 0, duration: 0.3, ease: "power2.in" })
        }
      }

      input.addEventListener('focus', onFocus)
      input.addEventListener('blur', onBlur)

      focusHandlers[index] = onFocus
      blurHandlers[index] = onBlur
    })

    return () => {
      inputs.forEach((input, index) => {
        input.removeEventListener('focus', focusHandlers[index])
        input.removeEventListener('blur', blurHandlers[index])
      })
    }
  }, { scope: containerRef })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Transmission Data Sent:", form)
    setForm({ name: "", email: "", message: "" })
    const lines = containerRef.current.querySelectorAll('.form-input + div')
    gsap.to(lines, { scaleX: 0, duration: 0.3, ease: "power2.in" })
  }

  return (
    <div ref={containerRef} className="bg-[#0c0c0c] text-white min-h-screen w-full font-sans overflow-x-hidden selection:bg-[#d2f54c] selection:text-black">

      <section className="h-screen w-full flex flex-col justify-between px-4 md:px-16 pt-24 md:pt-32 pb-8 md:pb-12 relative">
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]"></div>

        <div className="w-full">
          <p className="text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] text-gray-500 uppercase mb-3 md:mb-4">// DROP US A LINE</p>
          <div className="overflow-hidden h-[20vw] sm:h-[18vw] flex items-center">
            <h1 className="text-[17vw] sm:text-[16vw] font-bold tracking-tighter leading-none flex uppercase">
              {["C", "o", "n", "t", "a", "c", "t"].map((char, index) => (
                <span key={index} className="hero-char inline-block origin-bottom">{char}</span>
              ))}
              <span className="hero-char inline-block text-[#d2f54c] origin-bottom">.</span>
            </h1>
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/10 pt-6 md:pt-8">
          <p className="text-sm text-gray-400 max-w-xs">Let's build something iconic. Reach out below to map new systems together.</p>
          <div className="text-xs font-mono text-gray-500 tracking-widest uppercase animate-bounce">SCROLL TO FORMS &darr;</div>
        </div>
      </section>

      <section className="min-h-screen w-full py-16 md:py-24 px-4 md:px-16 flex flex-col justify-center bg-black">
        <div className="max-w-4xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          <div className="md:col-span-4 flex flex-col justify-between gap-4 md:gap-0">
            <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight leading-none text-white/90">
              Tell us about <br /><span className="text-[#d2f54c]">your project</span>
            </h2>
            <p className="text-sm text-gray-400 max-w-xs">We typically reply within 24 operational business tracking cycles.</p>
          </div>

          <form className="md:col-span-8 space-y-8 md:space-y-12" onSubmit={handleSubmit}>
            <div className="relative group">
              <input
                type="text"
                className="form-input w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-xl outline-none text-white transition-colors duration-300 focus:border-white/40"
                placeholder="What's your full name?"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d2f54c] scale-x-0 origin-left transition-transform duration-300"></div>
            </div>

            <div className="relative group">
              <input
                type="email"
                className="form-input w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-xl outline-none text-white transition-colors duration-300 focus:border-white/40"
                placeholder="Your email address?"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d2f54c] scale-x-0 origin-left transition-transform duration-300"></div>
            </div>

            <div className="relative group">
              <textarea
                rows="4"
                className="form-input w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-lg md:text-xl outline-none text-white resize-none transition-colors duration-300 focus:border-white/40"
                placeholder="Describe your vision or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d2f54c] scale-x-0 origin-left transition-transform duration-300"></div>
            </div>

            <button type="submit" className="group relative px-6 md:px-8 py-3 md:py-4 overflow-hidden rounded-full border border-white/20 text-white font-medium tracking-tight uppercase text-sm transition-all duration-300 hover:border-[#d2f54c] active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-[#d2f54c] transition-all duration-300 translate-y-full group-hover:translate-y-0"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black flex items-center gap-2">
                Send Transmission
                <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </span>
            </button>
          </form>

        </div>
      </section>

      <section className="py-14 md:py-20 bg-[#0c0c0c] border-y border-white/5 overflow-hidden flex items-center">
        <div ref={marqueeRef} className="whitespace-nowrap flex text-[10vw] sm:text-[9vw] font-bold tracking-tighter uppercase select-none opacity-80">
          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
            <span>DESIGN THE FUTURE</span> <span className="text-[#d2f54c]">&bull;</span>
            <span>K72 CORE HUB</span> <span className="text-[#d2f54c]">&bull;</span>
            <span>SCALABLE CODE SYSTEMS</span> <span className="text-[#d2f54c]">&bull;</span>
          </div>
          <div className="flex items-center gap-6 md:gap-8 pr-6 md:pr-8">
            <span>DESIGN THE FUTURE</span> <span className="text-[#d2f54c]">&bull;</span>
            <span>K72 CORE HUB</span> <span className="text-[#d2f54c]">&bull;</span>
            <span>SCALABLE CODE SYSTEMS</span> <span className="text-[#d2f54c]">&bull;</span>
          </div>
        </div>
      </section>

      <section ref={infoSectionRef} className="w-full py-20 md:py-32 px-4 md:px-16 bg-black flex flex-col items-center justify-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl w-full mx-auto">

          <div className="info-card bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center h-[220px] md:h-[260px] group transition-all duration-300 hover:border-white/20">
            <span className="text-xs font-mono text-gray-500 tracking-wider block mb-3">01 / EMAIL TRANSMISSION</span>
            <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-[#d2f54c] transition-colors duration-300 mb-4">Direct Message</h3>
            <a href="mailto:farooqmuzamil.127@gmail.com" className="text-sm md:text-base font-light text-gray-300 hover:underline break-all px-2">
              farooqmuzamil.127@gmail.com
            </a>
          </div>

          <div className="info-card bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center h-[220px] md:h-[260px] group transition-all duration-300 hover:border-white/20">
            <span className="text-xs font-mono text-gray-500 tracking-wider block mb-3">02 / COMMUNICATIONS</span>
            <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-[#d2f54c] transition-colors duration-300 mb-4">Primary Channel</h3>
            <a href="tel:+923130007962" className="text-xl md:text-2xl font-light tracking-wide text-gray-300 hover:text-[#d2f54c] transition-colors duration-200">
              +92 313 0007962
            </a>
          </div>

          <div className="info-card bg-[#0c0c0c] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center h-[220px] md:h-[260px] group transition-all duration-300 hover:border-white/20 sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-mono text-gray-500 tracking-wider block mb-3">03 / COMMUNICATIONS</span>
            <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-[#d2f54c] transition-colors duration-300 mb-4">Secondary Line</h3>
            <a href="tel:+92249288600" className="text-xl md:text-2xl font-light tracking-wide text-gray-300 hover:text-[#d2f54c] transition-colors duration-200">
              +92 249288600
            </a>
          </div>

        </div>

        <div className="max-w-6xl w-full mx-auto mt-16 md:mt-24 border-t border-white/10 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-mono text-gray-500">Open-Source Engine Access Framework</p>

          <a
            href="https://github.com/muzammilfarooq17/K72"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-4 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-sm uppercase tracking-tight transition-all duration-300 hover:bg-[#d2f54c] hover:scale-105"
          >
            Inspect GitHub Source
            <svg className="w-4 h-4 fill-current transform transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.008-.069-.008.1.015.762.078 1.16 1.163.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .269.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 md:mt-24 text-xs font-mono text-gray-600 border-t border-white/5 pt-8">
          <span>&copy; {new Date().getFullYear()} K72 ARCHIVE.</span>
          <a href="/" className="hover:text-white transition-colors duration-200 uppercase tracking-widest">&larr; Return Main Engine</a>
        </div>
      </section>

    </div>
  )
}

export default Contacts