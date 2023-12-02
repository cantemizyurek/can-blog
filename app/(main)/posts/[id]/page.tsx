import Markdown from 'react-markdown'
import getPost from './getPost'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import prisma from '@/app/utils/prismaSingleton'

interface Params {
  id: string
}

interface Props {
  params: Params
}

export const revalidate = 3600

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
    select: {
      title: true,
      description: true,
    },
  })

  if (!post) {
    return {
      title: 'Can Temizyurek | Not Found',
      description: 'Not found page of Can Temizyurek',
      creator: 'Can Temizyurek',
    }
  }

  return {
    title: `Can Temizyurek | ${post.title}`,
    description: post.description,
    creator: 'Can Temizyurek',
  }
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.id)

  if (!post) {
    return notFound()
  }

  console.log('render post', post.title)

  return (
    <div className="mx-auto m-4 space-y-4 responsive-container selection:bg-pink-100 selection:text-zinc-900 ">
      <h1 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
        {post?.title}
      </h1>
      <p className="text-zinc-400 text-xs md:text-sm lg:text-base xl:text-lg">
        {post?.createdAt.toLocaleDateString()}
      </p>
      <Markdown className="prose max-w-full prose-invert lg:prose-lg xl:prose-xl">
        {post?.content}
      </Markdown>
    </div>
  )
}
