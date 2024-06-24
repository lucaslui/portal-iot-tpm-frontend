'use client'
import React, { useState } from 'react'

import styles from './filter-bar.module.scss'

import FilterWrapper from '@/components/filter-wrapper/filter-wrapper'
import InputSearch from '@/components/input-search/search'

type Props = {
    filters: {
        search: string
        categories: string
    }
    handleFilter: (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const FilterBar: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.filters}>
            <InputSearch value={props.filters.search} onChange={props.handleFilter} />
            <FilterWrapper name="categories" value={props.filters.categories} onChange={props.handleFilter}>
                <option value="" disabled defaultValue="" hidden>Filtrar por categoria</option>
                <option value="">Todos</option>
                <option value="concepts">Conceitos</option>
                <option value="tutorials">Tutoriais</option>
                <option value="projects">Projetos</option>
                <option value="news">Notícias</option>
            </FilterWrapper>
        </div>
    )
}

export default FilterBar