import Link from 'next/link'
import Nav from './Nav'

export default function Header() {
  return (
    <header className="p-4 px-8 flex justify-between items-center text-pink-200 ">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        <Link href="/">Can Temizyurek</Link>
      </h1>
      <Nav />
    </header>
  )
}
