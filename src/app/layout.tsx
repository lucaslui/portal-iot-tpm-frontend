import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import '../styles/globals.scss'
import styles from './layout.module.scss'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/navbar/navbar'
import ParticlesBackground from '@/components/background/particles-background'

const roboto = Orbitron({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
    title: 'Comunidade TPM',
    description: 'Free web content about Internet of Things',
    authors: [{ name: "Lucas Lui Motta", url: "https://github.com/lucaslui" }],
    keywords: 'Internet of Things'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" rel="stylesheet" />
                <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className={roboto.className}>
                <ParticlesBackground />
                <Header />
                <NavBar />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-L5M2QF2FFW" />
        </html>
    )
}

export default RootLayout
