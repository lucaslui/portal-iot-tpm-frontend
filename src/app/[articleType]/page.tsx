import React from 'react'
import Link from 'next/link'

import styles from './page.module.scss'

import ArticleCard from '@/components/article-card/article-card'
import { ArticleModel } from '@/model/article'


type Props = {
    params: {
        articleType: string
    }
}

const Articles: React.FC<Props> = async ({ params }: { params: { articleType: string } }) => {

    const loadArticlePosts = async (): Promise<ArticleModel[]> => {
        const result = await fetch(`${process.env.API_URL}/api/articles?type=${params.articleType}`)
        const data = await result.json()
        return data.articles
    }

    const articles = await loadArticlePosts()

    return (
        <div className={styles.articles_grid}>
            {
                articles.map((article: any) => {
                    return (
                        <Link key={article.id} href={`/${params.articleType}/${article.id}`}>
                            <ArticleCard article={article} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Articles
