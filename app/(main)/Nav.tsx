'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathName = usePathname()

  return (
    <nav>
      <ul className="flex space-x-4 text-xl">
        <li>
          <Link
            href="/"
            className={
              `${pathName === '/' ? 'underline' : ''} ` +
              'underline-offset-8 decoration-pink-200 hover:underline'
            }
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              `${pathName === '/about' ? 'underline' : ''} ` +
              'underline-offset-8 decoration-pink-200 hover:underline'
            }
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}
