import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-card-flexible.module.scss'

import articleI18N from '@/i18n/article'
import { ArticleViewModel } from '@/model/article'
import ProfileCard from '@/components/profile-card/profile-card'
import DateCard from '@/components/date-card/date-card'

type Props = {
    article: ArticleViewModel
}

const PostCardFlexible: React.FC<Props> = async ({ article }: Props) => {
    return (
        <Link key={article.id} className={styles.post_card_full} href={`/${article.type}/${article.id}`}>
            <div className={styles.image_container}>
                <Image src={article.imageUrl} fill alt='Imagem de Capa do Artigo' />
                <h1 className={styles.embedded_type}>{articleI18N.pt[article.type]}</h1>
                <h1 className={styles.embedded_title}>{article.title}</h1>
            </div>
            <div className={styles.text_container}>
                <div className={styles.top}>
                    <ul>
                        {article.categories?.map((category, index) => (
                            <li key={index}> {category.name} </li>
                        ))}
                    </ul>
                    <p> {article.description} </p>
                </div>
                <div className={styles.bottom}>
                    <ProfileCard article={article} />
                    <DateCard article={article} />
                </div>
            </div>
        </Link>
    )
}

export default PostCardFlexible