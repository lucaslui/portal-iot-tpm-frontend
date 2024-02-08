import React from 'react'
import Link from 'next/link'

import styles from './page.module.scss'

import ArticleCard from '@/components/article-card/article-card'
import { ArticleModel } from '@/model/article'

const loadArticles = async (): Promise<ArticleModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles`, { cache: 'no-store' })
    const data = await result.json()
    return data.articles
}

const Articles: React.FC = async () => {

    const articles = await loadArticles()

    return (
        <div className={styles.articles_grid}>
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

export default Articles
