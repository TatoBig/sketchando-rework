import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export async function getServerSideProps({ query }) {
  const { id } = query
  return {
    props: { id }
  }
}

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const imageVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
}

const titleVariants = {
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.8
    }
  }
}

const textVariants = {
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.8
    }
  }
}

// const backVariants = {
//   exit: { x: 100, opacity: 0, transition },
//   enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
// }

const Post = ({ id }) => {

  useEffect(() => {
    console.log(id);
  }, [id])

  return (
    <motion.div
      className="lg:mx-40 md:mx-4"
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <div className="md:flex md:justify-center">
        <motion.div
          variants={imageVariants}
          className="md:w-1/2 h-64 md:h-96 relative"
        >
          <Image
            src="/img1.png"
            alt="a"
            layout="fill"
            className="h-full object-left md:object-left object-contain md:object-cover"
          />
        </motion.div>
        <div className="md:w-1/3 md:mt-5 md:ml-8 mx-4">
          <motion.div
            className="text-3xl font-bold text-gray-700"
            variants={titleVariants}
          >
            Titulo
          </motion.div>
          <motion.div
            className="text-xl"
            variants={textVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis molestie porttitor. Suspendisse accumsan nec nunc sit amet malesuada. Phasellus nulla urna, porttitor nec urna vitae, iaculis lobortis enim. Nullam id iaculis nulla. Maecenas nec eros cursus sapien elementum faucibus.
          </motion.div>
        </div>
      </div>

      {/* <motion.div className="fixed top-14 right-14 text-xl text-black" variants={backVariants}>
        <Link href="/">← Back</Link>
      </motion.div> */}
    </motion.div>
  )
}

export default Post
