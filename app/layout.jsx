import '@styles/globals.css'
import { children } from 'react'

export const metadata = {
    title : "Next wedding",
    description: "Aplikasi wedding 2.0"
}

const RootLayout = ({ children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
        </body>

        <main className="app">
            {children}
        </main>
    </html>
  )
}

export default RootLayout