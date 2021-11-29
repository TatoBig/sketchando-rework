import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from './useDimensions'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 39px 38px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(20px at 39px 38px)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const NavbarMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className="visible md:hidden h-14 rounded bg-gray-200">
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="fixed bg-gray-200 w-full h-full top-0 right-0 bottom-0 z-10" variants={sidebar}>
          <Navigation close={() => toggleOpen()} />
        </motion.div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>

  )
}

export default NavbarMobile
