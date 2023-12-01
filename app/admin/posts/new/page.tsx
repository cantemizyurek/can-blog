import prisma from '@/app/utils/prismaSingleton'
import PostEditor from '../PostEditor'
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
  return (
    <main className="px-4 mx-auto w-64 md:w-96 lg:w-[560px]">
      <PostEditor
        title=""
        content=""
        description=""
        published={false}
        createdAt={new Date()}
        deletable={false}
        action={async (formData: FormData) => {
          'use server'

          const data = Object.fromEntries(formData.entries())

          const schema = z.object({
            title: z.string(),
            content: z.string(),
            description: z.string(),
            published: z.string(),
          })

          const postData = schema.parse(data)

          const id = titleToId(postData.title)

          await prisma.post.create({
            data: {
              id,
              title: postData.title,
              content: postData.content,
              description: postData.description,
              published: postData.published === 'true',
            },
          })

          revalidatePath('/')
          redirect(`/admin/posts/${id}`)
        }}
      />
    </main>
  )
}
