import React from 'react'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import ReactHtmlParser from 'html-react-parser'

import styles from './page.module.scss'

import './custom-quill-now.css'

import { ArticleModel, ArticleViewModel } from '@/model/article'

import articleI18N from '@/i18n/article'
import ProfileCard from '@/components/profile-card/profile-card'
import DateCard from '@/components/date-card/date-card'
import CategoryList from '@/components/category-list/category-list'
import Breadcrumb from '@/components/breadcrumb/breadcrumb'

type Props = {
    params: {
        articleId: string
    }
}

export async function generateStaticParams({ params }: any): Promise<{ articleId: string }[]> {
    const response = await fetch(`${process.env.API_URL}/api/articles`)
    const data = await response.json()
    return data.articles
        .filter((article: ArticleModel) => article.type === params.articleType)
        .map((article: ArticleModel) => ({ articleId: article.id }))
}

const poppins = Poppins({
    subsets: ['latin'],
    style: ["normal"],
    weight: ['400', '500', '600', '700', '900'],
})

const loadArticleById = async (articleId: string): Promise<ArticleViewModel> => {
    const response = await fetch(`${process.env.API_URL}/api/articles/${articleId}`, {
        next: {
            revalidate: 10
        }
    })
    const article = await response.json()
    return article
}

const Article: React.FC<Props> = async ({ params }: { params: { articleId: string } }) => {

    const article = await loadArticleById(params.articleId)

    return (
        <div className={styles.article}>
            <header>
                <Breadcrumb articleTitle={article.title}/>
                <div className={styles.top}>
                    <h1> {article.title} </h1>
                    <span> {article.type ? articleI18N.pt[article.type] : ''} </span>
                </div>
                <h2> {article.description} </h2>
                <CategoryList categories={article.categories} />
                <div className={styles.image_container}>
                    <Image src={article.imageUrl} fill alt='Imagem do Artigo' />
                </div>
                <div className={styles.bottom}>
                    <ProfileCard article={article} />
                    <DateCard article={article} />
                </div>

            </header>
            <hr />
            <main className={`${poppins.className}`}>
                <div className='ql-editor'>
                    {ReactHtmlParser(article.content)}
                </div>
            </main>
        </div >
    )
}

export default Article
