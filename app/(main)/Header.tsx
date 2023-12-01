import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 px-8 flex justify-between items-center text-pink-200 ">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
        <Link href="/">Can Temizyurek</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4 text-xl">
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
