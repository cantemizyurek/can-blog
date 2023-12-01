import prisma from '@/app/utils/prismaSingleton'
import PostEditor from '../PostEditor'
import getPost from './getPost'
import { notFound, redirect } from 'next/navigation'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import titleToId from '@/app/utils/titleToId'

interface Params {
  id: string
}

interface Props {
  params: Params
}

export default async function Page({ params }: Props) {
  const post = await getPost(params.id)

  if (!post) {
    return notFound()
  }

  return (
    <main className="px-4 mx-auto w-64 md:w-96 lg:w-[560px]">
      <PostEditor
        title={post.title}
        content={post.content}
        description={post.description}
        published={post.published}
        createdAt={post.createdAt}
        deletable={true}
        action={async (formData: FormData) => {
          'use server'

          const data = Object.fromEntries(formData.entries())

          if (data.delete === 'true') {
            await prisma.post.delete({
              where: {
                id: params.id,
              },
            })

            revalidatePath(`/`)
            redirect(`/admin`)
          }

          const schema = z.object({
            title: z.string(),
            content: z.string(),
            description: z.string(),
            published: z.string(),
          })

          const postData = schema.parse(data)

          const newId = titleToId(postData.title)

          await prisma.post.update({
            where: {
              id: params.id,
            },
            data: {
              id: newId,
              title: postData.title,
              content: postData.content,
              description: postData.description,
              published: postData.published === 'true',
            },
          })

          revalidatePath('/')
          redirect(`/admin/posts/${newId}`)
        }}
      />
    </main>
  )
}
