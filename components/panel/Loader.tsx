import { motion } from "framer-motion";

const strokeLogo = {
  hidden: {
    opacity: 0,
    pathLength: 0.3
  },
  draw: {
    opacity: 1,
    rotate: 1080,
    // pathLength: 1,
    transition: {
      opacity: { duration: 0.01 },
      rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
      // pathLength: { duration: 0.7, yoyo: Infinity }
    }
  }
}

const Loader = ({ color = '#000000', size = "200" }) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={40}
      stroke={color}
      fill="none"
      initial="hidden"
      animate="draw"
      width={size}
      height={size}
    >
      <motion.circle
        variants={strokeLogo}
        cx="60"
        cy="60"
        r="50"
      />
    </motion.svg>
  )
}

export default Loader
