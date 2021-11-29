import { motion } from 'framer-motion'
import { Fragment } from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Header = () => {
  return (
    <Fragment>
      <NavbarMobile />
      <div
        className="rounded bg-primary my-2 w-full md:h-44 h-44 flex justify-center items-center"
      >
        <motion.div
          className="text-white text-5xl md:text-6xl font-bold"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 2 }}
        >
          Sketchando
        </motion.div>
      </div>
      <NavbarDesktop />
    </Fragment>
  )
}

export default Header
