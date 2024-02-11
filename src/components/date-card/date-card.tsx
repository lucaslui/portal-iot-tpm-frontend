import React from 'react';

import styles from './date-card.module.scss';

import { ArticleViewModel } from '@/model/article';
import { getDateFormat } from '@/utils/date';

type Props = {
    article: ArticleViewModel
}

const DateCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <section className={styles.date_card}>
            <div className={styles.group}>
                <label> Atualizado em </label>
                <time> {getDateFormat(article.updatedAt)} </time>
            </div>
            <div className={styles.group}>
                <label> Publicado em </label>
                <time> {getDateFormat(article.createdAt)} </time>
            </div>
        </section>
    )
}

export default DateCard