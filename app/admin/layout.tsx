import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieList = cookies()

  if (!cookieList.has('admin')) {
    redirect('/login')
  }

  const adminCookie = cookieList.get('admin')

  if (adminCookie?.value !== 'cantemizyurek') {
    redirect('/login')
  }

  return <>{children}</>
}
