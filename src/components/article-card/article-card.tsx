import React from 'react'
import Image from 'next/image'

import styles from './article-card.module.scss'

import { getDateFormat } from '@/utils/date'

type Props = {
  title: string
  description: string
  content: string
  imageUrl: string
  userId: string
  categoryId: string
  createdAt: string
}

const ArticleCard: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.article_card}>
      {/* <Image src={props.imageUrl} alt='Imagem do Artigo' width={100} height={100}/> */}
      <div className="article-content">
        <h4>{props.title}</h4>
        <span>{props.description}</span>
      </div>
      <div className="article-foot">
        <div>
          <i className="far fa-calendar-alt" />
          <span>{getDateFormat(props.createdAt)}</span>
        </div>
        <div>
          <i className="fas fa-user-edit" />
          <span>{'Lucas'}</span>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
