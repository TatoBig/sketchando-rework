import { useRouter } from 'next/dist/client/router'

const NavbarDesktop = () => {
  const router = useRouter()
  return (
    <div className="hidden h-12 rounded bg-gray-200 sticky top-0 z-50 md:flex justify-around">
      <button className="btn-navbar w-full" onClick={() => router.push('/')}>
        Inicio
      </button>
      <button className="btn-navbar w-full" onClick={() => router.push('/plugins')}>
        Plugins
      </button>
      <button className="btn-navbar w-full" onClick={() => router.push('/resources')}>
        Recursos
      </button>
      <button className="btn-navbar w-full" onClick={() => router.replace('http://foro.sketchando.net/')}>
        Foro
      </button>
      <button className="btn-navbar w-full" onClick={() => router.replace('https://www.facebook.com/Sketchando.net/')}>
        Facebook
      </button>
    </div>
  )
}

export default NavbarDesktop
