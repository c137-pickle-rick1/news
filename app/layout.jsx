import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
    title: "News",
    description: "News app",
    icons: {
        icon: [
            { url: '/logo-light.svg' },
            { url: '/logo-dark.svg', media: '(prefers-color-scheme: dark)' }
        ]
    }
}

export const viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
        { media: '(prefers-color-scheme: dark)', color: '#020618' },
    ],
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover'
}

export default function RootLayout({ children }) {
    return (
        <html lang="zh-CN">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
