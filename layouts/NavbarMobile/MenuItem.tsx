import * as React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/dist/client/router'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

export const MenuItem = ({ i, option, close }) => {
  const style = { border: `2px solid ${colors[i]}` }
  const router = useRouter()

  const handleClick = () => {
    if (option.replace) {
      router.replace(option.link)
      close()
    } else {
      router.push(option.link)
      close()
    }
  }
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleClick()}
    >
      <div className="rounded-full w-10 h-10 flex mr-5 items-center justify-center" style={style}>
        a
      </div>

      {/* <div className="text-placeholder" style={style} /> */}
      <h4 className="text-gray-700 text-2xl font-semibold">{option.name}</h4>
    </motion.li>
  )
}
