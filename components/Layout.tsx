import Head from 'next/head'
import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  title: string
}

const Layout = ({ children, title }: TProps) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="relative px-8 py-4">{children}</div>
    </div>
  )
}

export default Layout
