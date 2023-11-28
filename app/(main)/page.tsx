import PostDisplay from './PostDisplay'
import getPosts from './getPosts'

export default async function Home() {
  const posts = await getPosts()

  return (
    <ul className="w-80 mx-auto m-4 space-y-4">
      {posts.map(post => (
        <PostDisplay
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.createdAt.getTime()}
          id={post.id}
        />
      ))}
    </ul>
  )
}
