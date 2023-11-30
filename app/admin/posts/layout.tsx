import Link from 'next/link'
import { IoIosArrowRoundBack } from 'react-icons/io'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="p-4 flex">
        <Link
          href="/admin"
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <IoIosArrowRoundBack className="text-3xl" />
          Back
        </Link>
      </div>
      {children}
    </>
  )
}
