import '@styles/globals.css'

export const metadata = {
    title : "Next wedding",
    description: "Aplikasi wedding 2.0",
}

const RootLayout = ({ children}) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout