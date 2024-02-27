import React from 'react';

import styles from './date-card.module.scss';

import { ArticleViewModel } from '@/model/article';
import { getLongStringDateFormat } from '@/utils/date';

type Props = {
    article: ArticleViewModel
}

const DateCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <section className={styles.date_card}>
            <time>{article.readTime} minutos de leitura</time>
            <time>{getLongStringDateFormat(article.createdAt)}</time>
        </section>
    )
}

export default DateCard