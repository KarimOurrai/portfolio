import './globals.css'

export const metadata = {
  title: 'Karim Ourrai',
  description: 'Welcome to My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
