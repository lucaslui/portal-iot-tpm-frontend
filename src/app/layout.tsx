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
    title: 'Portal: IoT-TpM Unicamp',
    description: 'Conteúdo sobre Internet das Coisas de forma simples, prática e objetiva',
    authors: [{ name: "Lucas Lui Motta", url: "https://github.com/lucaslui" }],
    keywords: 'Internet of Things, Blockchain, Artificial Inteligence'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link href="https://use.fontawesome.com/releases/v6.5.2/css/all.css" rel="stylesheet" />
                <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
                {/* <link rel="icon" href="/favicon.svg" sizes="any" /> */}
                <link rel="icon" type="image/png" href="/favicon.png" />
            </head>
            <body className={roboto.className}>
                <Header />
                <div className={styles.space}>
                    <ParticlesBackground />
                    <NavBar />
                </div>
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
