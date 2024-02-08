import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import parse from 'html-react-parser'

import styles from './page.module.scss'

import { ArticleModel } from '@/model/article'
import { getDateFormat } from '@/utils/date'

import userLogo from '../../../assets/imgs/user.svg'
import articleI18N from '@/i18n/article'

type Props = {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const data = await fetch(`${process.env.API_URL}/api/articles`).then((res) => res.json())
    return data.articles.map((article: ArticleModel) => ({ slug: article.id }))
}

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

type ArticleViewModel = {
    id: string
    title: string
    description: string
    type: 'article' | 'new' | 'tutorial' | 'project'
    content: string
    imageUrl: string
    user: {
        id: string
        name: string
    }
    categories: {
        id: string
        name: string
        description: string
    }[]
    createdAt: Date
    updatedAt: Date
}

const Article: React.FC<Props> = async ({ params }: { params: { id: string } }) => {

    const loadArticle = async (): Promise<ArticleViewModel> => {
        const result = await fetch(`${process.env.API_URL}/api/articles`)
        const data = await result.json()
        const article = data.articles.find((article: ArticleViewModel) => article.id === params.id)
        return article
    }

    const article = await loadArticle()

    return (
        <div className={styles.article}>
            <header>
                <div className={styles.top}>
                    <h1> {article.title} </h1>
                    <span> {article.type ? articleI18N.pt[article.type] : ''} </span>
                </div>
                <h2> {article.description} </h2>
                <ul>
                    {article.categories?.map((category, index) => (
                        <li key={index}> {category.name} </li>
                    ))}
                </ul>
                <Image className={styles.cover} src={article.imageUrl} alt='Imagem do Artigo' width={720} height={405} />
                <hr />
                <div className={styles.footer}>
                    <section className={styles.profile}>
                        <div className='image'>
                            <Image src={userLogo} alt='Imagem do Perfil' width={30} height={30} />
                        </div>
                        <div className={styles.info}>
                            <h3> {article.user.name} </h3>
                            <p> {"Desenvolvedor"} </p>
                        </div>
                    </section>
                    <section className={styles.date}>
                        <div className={styles.group}>
                            <label> Atualizado em </label>
                            <time> {getDateFormat(article.updatedAt)} </time>
                        </div>
                        <div className={styles.group}>
                            <label> Publicado em </label>
                            <time> {getDateFormat(article.createdAt)} </time>
                        </div>
                    </section>
                </div>
            </header>
            <main className={`${styles.content} ${montserrat.className}`}>
                {parse(article.content)}
            </main>
        </div >
    )
}

export default Article
