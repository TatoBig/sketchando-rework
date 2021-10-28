import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import Checkbox from 'components/sandbox/Checkbox'
import Navbar from 'components/core/Navbar'
import { NavbarMenu } from 'components/core/NavbarMenu'

interface item {
  id: string
  title: string
  subtitle: string
}

const sandbox: NextPage = () => {
  const [selectedId, setSelectedId] = useState<null | string>(null)
  const [toggle, setToggle] = useState<boolean>(false)
  const items: item[] = [
    { id: '1', subtitle: 'subtitulo1', title: 'Titulo1' },
    { id: '2', subtitle: 'subtitulo2', title: 'Titulo2' },
    { id: '3', subtitle: 'subtitulo3', title: 'Titulo3' }
  ]
  return (
    <Fragment>
      <div className="visible md:hidden">
        <NavbarMenu />
      </div>
      <div
        className="m-2 rounded bg-primary md:h-64 h-64 flex justify-center items-center"
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
      {/* <button onClick={() => setToggle(!toggle)}>
        Montar
      </button> */}
      <div className="md:visible hidden">
        <Navbar />
      </div>

      {/* spam */}
      <div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
        <div
          className="m-2 rounded bg-primary md:h-52 h-64 flex justify-center items-center"
        >
          <motion.div
            className="text-white text-5xl font-bold"
          >
            Sketchando
          </motion.div>
        </div>
      </div>

      {/* <AnimateSharedLayout type="crossfade">
        {items.map((item, index) => (
          <motion.div key={index} layoutId={item.id} onClick={() => setSelectedId(item.id)} >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div layoutId={selectedId}>
              <motion.h5>{items.find(item => item.id === selectedId)?.title}</motion.h5>
              <motion.h2>{items.find(item => item.id === selectedId)?.subtitle}</motion.h2>
              <motion.button onClick={() => setSelectedId(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateSharedLayout> */}
    </Fragment>
  )
}

export default sandbox
