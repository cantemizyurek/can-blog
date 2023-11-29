import Link from 'next/link'
import PostCard from './PostCard'
import getPosts from '../getPosts'

export default async function Page() {
  const posts = await getPosts()

  return (
    <main className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl">Posts</h1>
        <Link
          href="/admin/posts/new"
          className="bg-rose-100 text-zinc-900 px-4 py-2 rounded-md hover:bg-rose-200 font-semibold"
        >
          New Post
        </Link>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            date={post.createdAt}
            id={post.id}
          />
        ))}
      </ul>
    </main>
  )
}
