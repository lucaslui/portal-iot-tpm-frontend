import React from 'react';

import styles from './date-card.module.scss';

import { ArticleViewModel } from '@/model/article';
import { getLongDateFormat } from '@/utils/date';

type Props = {
    article: ArticleViewModel
}

const DateCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <section className={styles.date_card}>
            <time>4 minutos de leitura</time>
            <time>{getLongDateFormat(article.createdAt)}</time>
        </section>
    )
}

export default DateCard