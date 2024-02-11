import React from 'react'
import Link from 'next/link'

import styles from './page.module.scss'

import { ArticleModel } from '@/model/article'
import ArticleCard from '@/components/article-card/article-card'


const loadNewPosts = async (): Promise<ArticleModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles?type=news`)
    const data = await result.json()
    return data.articles
}

const News: React.FC = async () => {

    const articles = await loadNewPosts()

    return (
        <div className={styles.news}>
            {
                articles.map((article: any) => {
                    return (
                        <Link key={article.id} href={`/articles/${article.id}`}>
                            <ArticleCard
                                title={article.title}
                                description={article.description}
                                content={article.content}
                                imageUrl={article.imageUrl}
                                userId={article.userId}
                                categoryId={article.categoryId}
                                createdAt={article.createdAt} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default News
