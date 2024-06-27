import React from 'react'

import styles from './page.module.scss'

import { ArticleViewModel } from '@/model/article'
import PostCardFlexible from '@/components/article-card-flexible/post-card-flexible'
import Link from 'next/link'
import NewsCardFlexible from '@/components/news-card-flexible/news-card-flexible'

const loadPosts = async (): Promise<ArticleViewModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles`, {
        next: {
            revalidate: 10
        }
    })
    const data = await result.json()
    return data.articles
}

const HomePage: React.FC = async () => {

    const articles = await loadPosts()

    return (
        <div className={styles.home}>
            <div className={styles.news}>
                <div className={styles.title}>
                    <h3>Últimas Noticias</h3>
                    <Link href="/concepts">Ver todos</Link>
                </div>
                <div className={styles.feed}>
                    {
                        articles
                            .filter(article => article.type === 'news')
                            .slice(0, 6)
                            .map((article: ArticleViewModel) => {
                                return (
                                    <NewsCardFlexible key={article.id} article={article} />
                                )
                            })
                    }
                    <div className={styles.spacer}></div>
                </div>
            </div>
            <div className={styles.concepts}>
                <div className={styles.title}>
                    <h3>Últimos Artigos</h3>
                    <Link href="/concepts">Ver todos</Link>
                </div>
                <div className={styles.feed}>
                    {
                        articles
                            .filter(article => article.type === 'concepts')
                            .slice(0, 6)
                            .map((article: ArticleViewModel) => {
                                return (
                                    <PostCardFlexible key={article.id} article={article} />
                                )
                            })
                    }
                    <div className={styles.spacer}></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage