'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import styles from './article-list.module.scss'

import ArticleCard from '@/components/article-card/article-card'
import { ArticleModel } from '@/model/article'
import FilterBar from '@/components/filter-bar/filter-bar'

type Props = {
    articles: ArticleModel[]
    articleType: string
}

const ArticleList: React.FC<Props> = (props: Props) => {
    const [articles, setArticles] = useState(props.articles)

    const [filters, setFilters] = useState({
        search: '',
        categories: ''
    })

    useEffect(() => {
        const articlesFiltered = props.articles.filter(article => article.title.toLowerCase().includes(filters.search?.toLowerCase()))
        setArticles(articlesFiltered)
    }, [filters, props.articles])

    const handleFilter = async (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFilters({ ...filters, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.articles}>
            <FilterBar filters={filters} handleFilter={handleFilter} />
            <div className={styles.articles_grid}>
                {
                    articles.map((article: any) => {
                        return (
                            <Link key={article.id} href={`/${props.articleType}/${article.id}`}>
                                <ArticleCard article={article} />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ArticleList