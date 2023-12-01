import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Can Temizyurek | About',
  description: 'About page of Can Temizyurek',
  creator: 'Can Temizyurek',
}

/* eslint-disable react/no-unescaped-entities */
export default function Page() {
  return (
    <main className="p-4 mx-auto responsive-container">
      <h1 className="text-4xl font-bold">About</h1>
      <p>Hi my name is Can Temizyurek. I'm a software developer.</p>
    </main>
  )
}
