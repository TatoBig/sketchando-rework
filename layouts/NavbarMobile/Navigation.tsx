import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'

interface Option {
  name: string
  link: string
  replace?: boolean
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const options: Option[] = [
  {
    name: 'Inicio',
    link: '/'
  },
  {
    name: 'Plugins',
    link: '/plugins'
  },
  {
    name: 'Recursos',
    link: '/resources'
  },
  {
    name: 'Foro',
    link: 'http://foro.sketchando.net/',
    replace: true
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/Sketchando.net/',
    replace: true
  },
]

export const Navigation = ({ close }) => (
  <motion.ul variants={variants}>
    {itemIds.map((i, index) => (
      <MenuItem i={i} key={i} option={options[index]} close={close} />
    ))}
  </motion.ul>
)

const itemIds = [0, 1, 2, 3, 4]
