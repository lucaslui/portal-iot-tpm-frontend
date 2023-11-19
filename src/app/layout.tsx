import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '../styles/globals.scss'
import styles from './layout.module.scss'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/navbar/navbar'

const roboto = Roboto({
    subsets: ['latin'],
    style: ["normal", "italic"],
    weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
    title: 'Full Stack IoT Tutorials',
    description: 'Free web tutorials about Internet of Things',
    authors: [{ name: "Lucas Lui Motta", url: "https://github.com/lucaslui" }],
    keywords: 'Internet of Things',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <link href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" rel="stylesheet" />
            </head>
            <body className={roboto.className}>
                <Header />
                <NavBar />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
