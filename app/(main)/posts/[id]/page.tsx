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

  return (
    <div className="mx-auto m-4 space-y-4 w-64 md:w-96 lg:w-[560px]">
      <h1 className="text-4xl font-bold">{post?.title}</h1>
      <p className="text-xs md:text-sm text-gray-500">
        {post?.createdAt.toLocaleDateString()}
      </p>
      <Markdown className="prose max-w-full prose-invert">
        {post?.content}
      </Markdown>
    </div>
  )
}
