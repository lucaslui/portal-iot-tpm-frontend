import React from 'react'
import Image from 'next/image'

import styles from './article-card.module.scss'

import { getDateFormat } from '@/utils/date'
import { ArticleViewModel } from '@/model/article'

type Props = {
    article: ArticleViewModel
}

const ArticleCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <div className={styles.article_card}>
            <div className={styles.image_container}>
                <Image src={article.imageUrl} alt='Imagem do Artigo' fill />
            </div>
            <div className={styles.body}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
            </div>
            <div className={styles.footer}>
                <div>
                    <i className="fas fa-user-edit" />
                    <span>{article.user?.name}</span>
                </div>
                <div>
                    <i className="far fa-calendar-alt" />
                    <span>{getDateFormat(article.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
