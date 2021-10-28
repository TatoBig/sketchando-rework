import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  const router: NextRouter = useRouter()

  return (
    <button
      onClick={() => router.push('/sandbox')}
    >
      Sandbox
    </button>
  )
}

export default Home
