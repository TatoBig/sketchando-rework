import Panel from 'layouts/Panel'
import Link from 'next/link'

const index = () => {
  return (
    <div>
      <Link href="panel/new">
        <a>
          Nuevo
        </a>
      </Link>
    </div>
  )
}

index.layout = Panel

export default index
