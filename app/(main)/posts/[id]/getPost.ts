import prisma from '@/app/utils/prismaSingleton'

export default async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      title: true,
      content: true,
      createdAt: true,
    },
  })
  return post
}
