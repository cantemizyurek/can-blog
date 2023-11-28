import PostDisplay from './PostDisplay'
import getPosts from './getPosts'

export default async function Home() {
  const posts = await getPosts()

  return (
    <ul className="mx-auto m-4 space-y-4 w-64 md:w-96 lg:w-[560px]">
      {posts.map(post => (
        <PostDisplay
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.createdAt}
          id={post.id}
        />
      ))}
    </ul>
  )
}
