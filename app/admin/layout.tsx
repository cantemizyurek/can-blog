import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-pink-100 flex flex-col">
        {children}
      </body>
    </html>
  )
}
