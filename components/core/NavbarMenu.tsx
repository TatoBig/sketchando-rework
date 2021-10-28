import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./useDimensions"
import { MenuToggle } from "./Menutoggle"
import { Navigation } from "./Navigation"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 39px 38px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at 39px 38px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}

export const NavbarMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className="m-2 h-14 rounded bg-gray-200 flex items-center">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        {/* Expansive background */}
        <motion.div className="fixed bg-gray-200 w-full h-full top-0 right-0 bottom-0" variants={sidebar}>
          {/* Items */}
          <Navigation />
        </motion.div>

        {/* Button */}
        <div className="fixed top-7 left-7 w-20 h-20">
          <MenuToggle toggle={() => toggleOpen()} />
        </div>
      </motion.nav>
    </div>

  )
}
