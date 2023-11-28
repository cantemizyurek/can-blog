import Link from 'next/link'

interface Props {
  title: string
  description: string
  date: number
  id: string
}

export default function PostDisplay({ title, description, date, id }: Props) {
  return (
    <li>
      <Link href={`/posts/${id}`}>
        <h3 className="text-base md:text-lg lg:text-xl font-semibold">
          {title}
        </h3>
        <p className="text-sm md:text-base">{description}</p>
        <div className="flex justify-between">
          <span></span>
          <p className="text-xs md:text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </Link>
    </li>
  )
}
