import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-card-flexible.module.scss'

import articleI18N from '@/i18n/article'
import { ArticleViewModel } from '@/model/article'
import ProfileDateCard from '@/components/profile-date-card/profile-date-card'
import CategoryList from '@/components/category-list/category-list'

type Props = {
    article: ArticleViewModel
}

const PostCardFlexible: React.FC<Props> = ({ article }: Props) => {
    return (
        <Link key={article.id} className={styles.post_card_full} href={`/${article.type}/${article.id}`}>
            <div className={styles.image_container}>
                <Image src={article.imageUrl} fill alt='Imagem de Capa do Artigo' />
                <h1 className={styles.embedded_type}>{articleI18N.pt[article.type]}</h1>
                <h1 className={styles.embedded_title}>{article.title}</h1>
            </div>
            <div className={styles.text_container}>
                <div className={styles.top}>
                    <CategoryList categories={article.categories} />
                    <p> {article.description} </p>
                </div>
                <div className={styles.bottom}>
                    <ProfileDateCard article={article} />
                </div>
            </div>
        </Link>
    )
}

export default PostCardFlexible