import './globals.css'

export const metadata = {
  title: 'Loyalty Level Calculator',
  description: 'Loyalty calculator landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
