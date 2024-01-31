import React from 'react'
import Link from 'next/link'

import styles from './page.module.scss'
import ArticleCard from '@/components/article-card/article-card'
import { ArticleModel } from '@/model/article'

const articlesMock: ArticleModel[] = [
    {
        id: '1',
        title: 'Article 1',
        description: 'This is the first article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '2',
        title: 'Article 2',
        description: 'This is the second article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '3',
        title: 'Article 3',
        description: 'This is the third article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '4',
        title: 'Article 4',
        description: 'This is the fourth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '5',
        title: 'Article 5',
        description: 'This is the fifth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '6',
        title: 'Article 6',
        description: 'This is the sixth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '7',
        title: 'Article 7',
        description: 'This is the seventh article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '8',
        title: 'Article 8',
        description: 'This is the eighth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '9',
        title: 'Article 9',
        description: 'This is the ninth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '10',
        title: 'Article 10',
        description: 'This is the tenth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
    {
        id: '11',
        title: 'Article 11',
        description: 'This is the tenth article',
        type: 'articles',
        content: 'string',
        imageUrl: 'string',
        userId: 'string',
        categories: ['connectivity'],
        createdAt: new Date(),
    },
]

const loadArticles = async (): Promise<ArticleModel[]> => {
    // const result = await fetch(`http://localhost:5050/api/articles`)
    // const data = await result.json()
    // return data
    return Promise.resolve(articlesMock)
}

const Articles: React.FC = async () => {

    const articles = await loadArticles()

    return (
        <div className={styles.articles_grid}>
            {
                articles.map((article: any) => {
                    return (
                        <Link key={article.id} href={`/configuration/article?articleId=${article.id}`}>
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
