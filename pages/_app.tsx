import 'styles/globals.css'
import { AppLayoutProps } from 'next/app'
import Default from 'layouts/Default'


function MyApp({ Component, pageProps, router }: AppLayoutProps) {
  const Layout = Component.layout || Default
  const url = `https://localhost:3000${router.route}`

  return (
    <div className="m-2">
      <Layout>
        <Component {...pageProps} canonical={url} key={url} />
      </Layout>
    </div>
  )
}
export default MyApp
