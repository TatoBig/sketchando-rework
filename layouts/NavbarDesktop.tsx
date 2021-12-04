import Link from 'next/link'

const NavbarDesktop = () => {
  return (
    <div className="hidden h-12 rounded bg-gray-200 sticky top-0 z-50 md:flex justify-around">
      <Link scroll={false} href="/">
        <a className="btn-navbar">
          Inicio
        </a>
      </Link>
      <Link scroll={false} href="/plugins">
        <a className="btn-navbar">
          Plugins
        </a>
      </Link>
      <Link scroll={false} href="/resources">
        <a className="btn-navbar">
          Recursos
        </a>
      </Link>
      <Link scroll={false} href="http://foro.sketchando.net/">
        <a className="btn-navbar">
          Foro
        </a>
      </Link>
      <Link scroll={false} href="https://www.facebook.com/Sketchando.net/">
        <a className="btn-navbar">
          Facebook
        </a>
      </Link>
    </div>
  )
}

export default NavbarDesktop
