import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-card-full.module.scss'

import { getDateFormat } from '@/utils/date'
import articleI18N from '@/i18n/article'
import { ArticleViewModel } from '@/model/article'
import ProfileCard from '@/components/profile-card/profile-card'

type Props = {
    article: ArticleViewModel
}

const PostCardFull: React.FC<Props> = async ({ article }: Props) => {
    return (
        <Link key={article.id} href={`/${article.type}/${article.id}`} className={styles.post_card_full}>
            <div className={styles.image_container}>
                <Image src={article.imageUrl} fill alt='Imagem de Capa do Artigo' />
                <h1 className={styles.embedded_title}>{article.title}</h1>
                <h1 className={styles.embedded_type}>{articleI18N.pt[article.type]}</h1>
            </div>
            <div className={styles.text_container}>
                <div className={styles.top}>
                    <ul>
                        {article.categories?.map((category, index) => (
                            <li key={index}> {category.name} </li>
                        ))}
                    </ul>
                    <h2> {article.description} </h2>
                </div>
                <div className={styles.bottom}>
                    <ProfileCard article={article} />
                    <span> {getDateFormat(article.createdAt)} </span>
                </div>
            </div>
        </Link>
    )
}

export default PostCardFull