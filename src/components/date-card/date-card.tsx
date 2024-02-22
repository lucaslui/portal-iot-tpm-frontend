import React from 'react';

import styles from './date-card.module.scss';

import { ArticleViewModel } from '@/model/article';
import { getLongDateFormat, getShortDateFormat } from '@/utils/date';

type Props = {
    article: ArticleViewModel
}

const DateCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <section className={styles.date_card}>
            <div className={styles.group}>
                {/* <i className='far fa-clock' /> */}
                <time>4 minutos de leitura</time>
            </div>
            <div className={styles.group}>
                <time className={styles.short_date}>{getShortDateFormat(article.createdAt)}</time>
                <time className={styles.long_date}>{getLongDateFormat(article.createdAt)}</time>
            </div>
        </section>
    )
}

export default DateCard