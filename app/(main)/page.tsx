import PostDisplay from './PostDisplay'

export default function Home() {
  return (
    <ul className="w-80 mx-auto m-4 space-y-4">
      <PostDisplay
        title="Hello World"
        description="This is a test post"
        date={Date.now()}
        id="hello-world"
      />
      <PostDisplay
        title="Hello World"
        description="This is a test post"
        date={Date.now()}
        id="hello-world"
      />
    </ul>
  )
}
