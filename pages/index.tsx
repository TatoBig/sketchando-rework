import { Carousel } from 'components/core/Carousel'
import Link from 'next/link'
import MainCard from 'components/core/MainCard'
import Transition from 'components/animation/Transition'

const Home = () => {
  return (
    <Transition>
      <div className="md:flex md:justify-center md:mt-14">
        <MainCard id="test" />
        <MainCard id="test1" />
        <MainCard id="test2" />
      </div>
      <Link href="/sandbox">
        <a>
          .
        </a>
      </Link>
      <div className="mt-2 md:flex md:mx-64 md:justify-around">
        <div className="bg-gray-200 p-8 rounded mb-2 flex items-center">
          <div className="text-2xl">
            Tutoriales
          </div>
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </Transition>
  )
}

export default Home
