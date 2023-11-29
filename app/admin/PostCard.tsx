import Link from 'next/link'
import calcAgo from '../utils/calcAgo'

interface Props {
  title: string
  description: string
  date: Date
  id: string
  published: boolean
}

export default function PostCard({
  title,
  description,
  date,
  id,
  published,
}: Props) {
  return (
    <li className="border border-gray-200 rounded-md p-4">
      <Link href={`/admin/posts/${id}`}>
        <h3 className="text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex justify-between items-center mt-2">
          {published ? (
            <span className="text-green-500">Published</span>
          ) : (
            <span className="text-yellow-500">Draft</span>
          )}
          <p className="text-xs md:text-sm text-gray-500">{calcAgo(date)}</p>
        </div>
      </Link>
    </li>
  )
}
