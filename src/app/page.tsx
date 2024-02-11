import React from 'react'

import styles from './page.module.scss'

import { ArticleViewModel } from '@/model/article'
import PostCardFull from '@/components/article-card-full/post-card-full'
import PostCardSmall from '@/components/article-card-small/post-card-small'
import PostCardMedium from '@/components/article-card-medium/post-card-medium'

const loadPosts = async (): Promise<ArticleViewModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles`)
    const data = await result.json()
    return data.articles
}

const ContronPanel: React.FC = async () => {

    const articles = await loadPosts()

    const customClassnameByIndex = (index: number): string => {
        return index === 0 ? styles.post_full : index <= 3 ? styles.post_third : styles.post_half
    }

    const customImageSizeByIndex = (index: number): { width: number, height: number } => {
        return index === 0 ? { width: 720, height: 405 } : index <= 3 ? { width: 240, height: 160 } : { width: 360, height: 202 }
    }

    return (
        <div className={styles.home}>
            <div className={styles.feed}>
                {
                    articles.map((article: ArticleViewModel, index: number) => {
                        return (
                            index == 0 ?
                                <PostCardFull key={article.id} article={article} />
                                : index <= 3 ?
                                    <PostCardSmall key={article.id} article={article} />
                                    :
                                    <PostCardMedium key={article.id} article={article} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ContronPanel