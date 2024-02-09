import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import parse from 'html-react-parser'

import styles from './page.module.scss'

import { ArticleModel, ArticleViewModel } from '@/model/article'
import { getDateFormat } from '@/utils/date'

import userLogo from '../../../assets/imgs/user.svg'
import articleI18N from '@/i18n/article'

type Props = {
    params: {
        articleId: string
    }
}

export async function generateStaticParams(): Promise<{ articleId: string }[]> {
    const response = await fetch(`${process.env.API_URL}/api/articles`)
    const data = await response.json()
    return data.articles.map((article: ArticleModel) => ({ articleId: article.id }))
}

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const Article: React.FC<Props> = async ({ params }: { params: { articleId: string } }) => {

    const loadArticle = async (): Promise<ArticleViewModel> => {
        const response = await fetch(`${process.env.API_URL}/api/articles/${params.articleId}`)
        const article = await response.json()
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
