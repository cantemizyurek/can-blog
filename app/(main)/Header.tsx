import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4 px-8 flex justify-between items-center text-rose-200 bg-gradient-to-b from-zinc-800 to-zinc-900">
      <h1 className="text-4xl font-bold">
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
