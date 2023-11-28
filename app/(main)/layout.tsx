import '../globals.css'
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-rose-200">
        <Header />
        {children}
      </body>
    </html>
  )
}
