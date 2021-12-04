import { motion } from 'framer-motion'
import Empty from 'layouts/Empty'

const transition = {
  duration: 2,
  ease: 'easeInOut',
}

const whiteStroke = {
  hidden: {
    pathLength: 0
  },
  draw: {
    pathLength: 1,
    stroke: '#ffffff',
    transition: transition
  }
}

const background = {
  hidden: {
    background: '#ffffff'
  },
  draw: {
    background: '#000000'
  }
}

const glowStroke = {
  hidden: {
    opacity: 0
  },
  draw: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2
    }
  }
}

const sandbox = () => {
  return (
    <motion.div
      initial="hidden"
      animate="draw"
      variants={background}
      transition={transition}
      className="h-screen w-full flex justify-center items-center"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-1/2 md:h-1/2 mx-4"
        viewBox="0 0 600 520"
        strokeLinecap="round"
      >
        <motion.path
          fill="none"
          variants={whiteStroke}
          stroke="#000000"
          strokeWidth={10}
          d="M8.159943,161.47314C55.4146,128.34656,165.51884,65.57788,217.21072,102.505516C231.79047,112.92102,241.72346,131.26799,244.28882,160.44803C246.51724,185.79854,240.59781,259.02844,161.4919,369.7823C146.42404,390.87805,128.70078,413.336,107.87289,437.08322C94.592926,452.2248,84.62263,462.66534,74.6523,473.1056"
        />
        <motion.path
          fill="none"
          variants={whiteStroke}
          stroke="#000000"
          strokeWidth={10}
          d="M113.70418,244.36452C113.70418,244.36452,376.33783,91.77746,564.30273,105.790085"
        />
        <motion.path
          fill="none"
          variants={whiteStroke}
          stroke="#000000"
          strokeWidth={10}
          d="M387.3639,454.07913C387.3639,454.07913,354.3199,84.03106,464.17984,26.743324"
        />
        <motion.path
          fill="none"
          variants={whiteStroke}
          stroke="#000000"
          strokeWidth={10}
          d="M323.90796,371.52057C310.90097,362.43695,269.79733,333.21616,230.45468,380.77814C214.7274,399.7913,202.36848,454.2335,258.75058,449.15237C271.29327,448.02194,282.39282,443.8199,292.8597,436.34393C303.32672,428.86774,309.49878,419.50537,318.13205,417.17175C326.7656,414.83765,335.8239,422.62152,347.87155,432.9735"
        />
        <motion.path
          fill="none"
          variants={whiteStroke}
          stroke="#000000"
          strokeWidth={10}
          d="M573.02856,397.0599C526.3153,339.92273,478.00153,368.86218,471.82755,405.07254C466.2283,437.91025,491.41782,446.66498,506.03616,448.3685C517.58563,449.7139,528.0563,447.06073,541.5748,443.35446C542.2876,443.15942,543.006,442.96173,543.73486,442.7611"
        />
        <motion.path
          fill="none"
          variants={glowStroke}
          initial="hidden"
          animate="draw"
          strokeOpacity="0.15"
          stroke="#FF6A00"
          strokeWidth={22}
          d="M8.159943,161.47314C55.4146,128.34656,165.51884,65.57788,217.21072,102.505516C231.79047,112.92102,241.72346,131.26799,244.28882,160.44803C246.51724,185.79854,240.59781,259.02844,161.4919,369.7823C146.42404,390.87805,128.70078,413.336,107.87289,437.08322C94.592926,452.2248,84.62263,462.66534,74.6523,473.1056"
        />
        <motion.path
          fill="none"
          variants={glowStroke}
          initial="hidden"
          animate="draw"
          strokeOpacity="0.15"
          stroke="#FF6A00"
          strokeWidth={22}
          d="M113.70418,244.36452C113.70418,244.36452,376.33783,91.77746,564.30273,105.790085"
        />
        <motion.path
          fill="none"
          variants={glowStroke}
          initial="hidden"
          animate="draw"
          strokeOpacity="0.15"
          stroke="#FF6A00"
          strokeWidth={22}
          d="M387.3639,454.07913C387.3639,454.07913,354.3199,84.03106,464.17984,26.743324"
        />
        <motion.path
          fill="none"
          variants={glowStroke}
          initial="hidden"
          animate="draw"
          strokeOpacity="0.15"
          stroke="#FF6A00"
          strokeWidth={22}
          d="M323.90796,371.52057C310.90097,362.43695,269.79733,333.21616,230.45468,380.77814C214.7274,399.7913,202.36848,454.2335,258.75058,449.15237C271.29327,448.02194,282.39282,443.8199,292.8597,436.34393C303.32672,428.86774,309.49878,419.50537,318.13205,417.17175C326.7656,414.83765,335.8239,422.62152,347.87155,432.9735"
        />
        <motion.path
          fill="none"
          variants={glowStroke}
          initial="hidden"
          animate="draw"
          strokeOpacity="0.15"
          stroke="#FF6A00"
          strokeWidth={22}
          d="M573.02856,397.0599C526.3153,339.92273,478.00153,368.86218,471.82755,405.07254C466.2283,437.91025,491.41782,446.66498,506.03616,448.3685C517.58563,449.7139,528.0563,447.06073,541.5748,443.35446C542.2876,443.15942,543.006,442.96173,543.73486,442.7611"
        />
      </motion.svg>
    </motion.div>
  )
}

sandbox.layout = Empty

export default sandbox
