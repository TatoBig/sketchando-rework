import Image from 'next/image'
import Link from 'next/link'

const PanelDrawer = ({ children }) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="bg-gray-200 m-4 md:relative top-1/6 left-0 right-0 md:m-auto md:p-4 py-4 px-2 md:w-1/2 rounded-xl shadow-xl flex">
        <div className="md:w-1/4 min-w-max md:p-4">
          <Link scroll={false} href="/panel/list">
            <a className="font-semibold w-full hover:bg-gray-300 p-3 rounded-xl flex items-center">
              <Image src="/list.svg" alt="Post list" width={18} height={18} />
              <p className="md:ml-2 hidden md:block">
                Lista de posts
              </p>
            </a>
          </Link>
          <Link scroll={false} href="/panel/new">
            <a className="font-semibold w-full hover:bg-gray-300 p-3 rounded-xl flex items-center">
              <Image src="/add.svg" alt="Add post" width={18} height={18} />
              <p className="md:ml-2 hidden md:block">
                Crear nuevo post
              </p>
            </a>
          </Link>
        </div>
        <div className="bg-gray-300 w-0.5" />
        <div className="md:w-3/4 w-full md:p-4 md:pl-10 p-2 pl-4 min-h-full">
          {children}
        </div>
      </div>
    </div>

  )
}

export default PanelDrawer
