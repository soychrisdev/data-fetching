import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next | Home'
}

export default function Home() {
  return (
    <>
      <h1 className={inter.className}>Hello world</h1>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link href={'/users'}>Users</Link>
        </li>
      </ul>
    </>
  )
}
