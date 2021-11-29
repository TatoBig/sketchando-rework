import type { NextPage } from 'next'
import Transition from 'components/animation/Transition'
import MainCard from 'components/core/MainCard'

const Home: NextPage = () => {
  return (
    <Transition>
      <div>
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
      {/* <div className="mt-2 md:flex md:mx-64 md:justify-around">
        <div className="bg-gray-200 p-8 rounded mb-2 flex items-center">
          <div className="text-2xl">
            Tutoriales
          </div>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div> */}
    </Transition>
  )
}

export default Home
