import React from 'react'

import styles from './page.module.scss'

import { ArticleViewModel } from '@/model/article'
import PostCardFlexible from '@/components/article-card-flexible/post-card-flexible'

const loadPosts = async (): Promise<ArticleViewModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles`)
    const data = await result.json()
    return data.articles
}

const ContronPanel: React.FC = async () => {

    const articles = await loadPosts()

    return (
        <div className={styles.home}>
            <div className={styles.feed}>
                {
                    articles.map((article: ArticleViewModel) => {
                        return (
                            <PostCardFlexible key={article.id} article={article} />
                        )
                    })
                }
                <div className={styles.spacer}></div>
            </div>
        </div>
    )
}

export default ContronPanel