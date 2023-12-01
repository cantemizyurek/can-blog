import Link from 'next/link'
import calcAgo from '../utils/calcAgo'

interface Props {
  title: string
  description: string
  date: Date
  id: string
}

export default function PostDisplay({ title, description, date, id }: Props) {
  return (
    <li>
      <Link href={`/posts/${id}`}>
        <h2 className="text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h2>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex justify-between">
          <span></span>
          <p className="text-xs md:text-sm text-zinc-400">{calcAgo(date)}</p>
        </div>
      </Link>
    </li>
  )
}
