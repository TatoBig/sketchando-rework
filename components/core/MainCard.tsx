import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

const MainCard = ({ id }) => {
  const router = useRouter()

  const [isVisible, setIsVisible] = useState(false)

  return (
    <motion.div
      className="my-2 h-40 md:h-96 md:w-80 md:mx-12 w-full rounded relative cursor-pointer"
      onClick={() => router.push(`/post/${id}`, undefined, { scroll: false })}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <Image src="/img1.png" alt="Card" layout="fill" className="absolute object-center md:object-left object-cover" />
      <AnimatePresence>
        {isVisible &&
          <motion.div
            className="p-4 absolute bg-gradient-to-t h-auto from-gray-900 via-gray-700 to-transparent bottom-0 w-full text-white rounded-b"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis molestie porttitor.
          </motion.div>
        }
      </AnimatePresence>
    </motion.div >
  )
}

export default MainCard
