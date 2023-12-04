import { Metadata } from 'next'
import PostDisplay from './PostDisplay'
import getPosts from './getPosts'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Can Temizyurek | Blog',
  description: 'Personal blog of Can Temizyurek',
  creator: 'Can Temizyurek',
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <ul className="mx-auto m-4 space-y-4 responsive-container">
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
