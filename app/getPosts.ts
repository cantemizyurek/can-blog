import prisma from './utils/prismaSingleton'

export default async function getPosts() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
    },
    where: {
      published: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return posts
}
