import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-card-small.module.scss'

import { getDateFormat } from '@/utils/date'
import articleI18N from '@/i18n/article'
import { ArticleViewModel } from '@/model/article'
import ProfileCard from '@/components/profile-card/profile-card'

type Props = {
    article: ArticleViewModel
}

const PostCardSmall: React.FC<Props> = async ({ article }: Props) => {
    return (
        <Link key={article.id} href={`/${article.type}/${article.id}`} className={styles.post_card_small}>
            <div className={styles.image_container}>
                <h1 className={styles.embedded_title}>{article.title}</h1>
                <h1 className={styles.embedded_type}>{articleI18N.pt[article.type]}</h1>
                <Image src={article.imageUrl} width={640} height={640} alt='Imagem de Capa do Artigo' />
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
                    <ProfileCard article={article} logoWidth={20} logoHeight={20} />
                    <span> {getDateFormat(article.createdAt)} </span>
                </div>
            </div>
        </Link>
    )
}

export default PostCardSmall