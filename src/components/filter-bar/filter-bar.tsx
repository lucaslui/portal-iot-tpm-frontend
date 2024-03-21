'use client'
import React, { useState } from 'react'

import styles from './filter-bar.module.scss'

import FilterWrapper from '@/components/filter-wrapper/filter-wrapper'
import InputSearch from '@/components/input-search/search'

const FilterBar: React.FC = () => {
    const [filters, setFilters] = useState({
        search: '',
        categories: ''
    })

    const handleFilter = async (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFilters({ ...filters, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.filters}>
            <InputSearch value={filters.search} onChange={handleFilter} />
            <FilterWrapper name="categories" value={filters.categories} onChange={handleFilter}>
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