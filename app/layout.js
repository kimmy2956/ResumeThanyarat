import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'ชื่อของคุณ — Resume',
  description: 'Portfolio / Resume website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Header />
        <main className="container mt-8 mb-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
