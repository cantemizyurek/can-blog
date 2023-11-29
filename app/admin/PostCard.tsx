import Link from 'next/link'
import calcAgo from '../utils/calcAgo'

interface Props {
  title: string
  description: string
  date: Date
  id: string
}

export default function PostCard({ title, description, date, id }: Props) {
  return (
    <li className="border border-gray-200 rounded-md p-4">
      <Link href={`/admin/posts/${id}`}>
        <h3 className="text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex justify-between">
          <span></span>
          <p className="text-xs md:text-sm text-gray-500">{calcAgo(date)}</p>
        </div>
      </Link>
    </li>
  )
}
