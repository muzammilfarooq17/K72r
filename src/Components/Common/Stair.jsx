import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { useLocation } from "react-router-dom"

const Stair = (props) => {
  const currentPath = useLocation().pathname
  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.to(stairParentRef.current, {
      display: 'block',
      delay: -0.1
    })
    tl.from('.stair', {
      height: 0,
      stagger: { amount: -0.25 }
    })
    tl.to('.stair', {
      y: '100%',
      stagger: { amount: -0.25 }
    })
    tl.to(stairParentRef.current, {
      display: 'none'
    })
    tl.to('.stair', {
      y: '0%',
    })
    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.4,
      scale: 1.02
    })
  }, [currentPath])

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full flex fixed z-20 top-0">
        <div className="h-screen w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stair