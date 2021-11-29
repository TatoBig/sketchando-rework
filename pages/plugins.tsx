import { motion } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'
import Link from 'next/link'

const images = [
  "5b5a3938562fa764113169a6/1532639559620/DSCF3338",
  "5b5a3628f950b7390fbfc5f8/1532639027872/DSCF3246",
  "5b5a3741575d1fccb5ac6b3f/1532639066455/DSCF3268",
  "5b5a376b0e2e728eeeaca8e4/1532683586969/DSCF3274",
  "5b5c228403ce64f3c80d4d8e/1532764845121/DSCF3348",
  "5b5a3b800e2e728eeead9575/1532640158813/DSCF3375"
];

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const plugins: NextPage = () => {
  return (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.img
        variants={imageVariants}
        src={`https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/t/${images[0]
          }.jpg?format=1500w`}
        alt="The Barbican"
      />
      <motion.div className="fixed top-14 right-14 text-xl text-black" variants={backVariants}>
        <Link href="/">← Back</Link>
      </motion.div>
    </motion.div>
  )
}

export default plugins
