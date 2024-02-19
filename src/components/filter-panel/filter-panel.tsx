'use client'

import React, { useEffect, useState } from 'react'

import styles from './page.module.scss'

import CategoryFilter from '@/components/filter-category/filter-category'
import TypeFilter from '@/components/filter-type/filter-type'
import SearchFilter from '@/components/filter-search/filter-search'

import PostList from '@/components/post-list/post-list'

type Post = {
    title: string
    description: string
    type: string
    categories: string[]
}

const initialPosts: Post[] = [
    {
        title: 'Article 1',
        description: 'This is the first article',
        type: 'articles',
        categories: ['connectivity']
    },
    {
        title: 'Article 2',
        description: 'This is the second article',
        type: 'articles',
        categories: ['connectivity']
    },
    {
        title: 'Article 3',
        description: 'This is the third article',
        type: 'articles',
        categories: ['connectivity']
    },
    {
        title: 'News 1',
        description: 'This is the first news',
        type: 'news',
        categories: ['connectivity']
    },
    {
        title: 'News 2',
        description: 'This is the second news',
        type: 'news',
        categories: ['connectivity']
    },
    {
        title: 'News 3',
        description: 'This is the third news',
        type: 'news',
        categories: ['connectivity']
    },
    {
        title: 'Tutorial 1',
        description: 'This is the first tutorial',
        type: 'tutorials',
        categories: ['connectivity']
    },
    {
        title: 'Tutorial 2',
        description: 'This is the second tutorial',
        type: 'tutorials',
        categories: ['connectivity']
    },
    {
        title: 'Tutorial 3',
        description: 'This is the third tutorial',
        type: 'tutorials',
        categories: ['connectivity']
    },
    {
        title: 'Project 1',
        description: 'This is the first project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 2',
        description: 'This is the second project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 3',
        description: 'This is the third project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 1',
        description: 'This is the first project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 2',
        description: 'This is the second project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 3',
        description: 'This is the third project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 1',
        description: 'This is the first project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 2',
        description: 'This is the second project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 3',
        description: 'This is the third project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 3',
        description: 'This is the third project',
        type: 'projects',
        categories: ['connectivity']
    },
    {
        title: 'Project 3',
        description: 'This is the third project',
        type: 'projects',
        categories: ['connectivity', 'wireless', 'artificial-intelligence']
    }
]

const FilterPanel: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [types, setTypes] = useState<string[]>([])
    const [search, setSearch] = useState<string>('')

    const filterPostsByCategory = (post: Post) => {
        if (categories.length === 0) {
            return true
        }
        if (categories.every(category => post.categories.includes(category))) {
            return true
        } else {
            return false
        }
    }

    const filterPostsByType = (post: Post) => {
        if (types.length === 0) {
            return true
        } else {
            return types.includes(post.type)
        }
    }

    const filterPostsBySearch = (post: Post) => {
        if (search === '') {
            return true
        } else {
            return post.title.toLowerCase().includes(search.toLowerCase())
        }
    }

    const posts = initialPosts.filter(filterPostsByType).filter(filterPostsByCategory).filter(filterPostsBySearch)

    return (
        <div className={styles.filter_panel}>
            <CategoryFilter categories={categories} setCategories={setCategories} />
            <div className={styles.results}>
                <div className={styles.filter_header}>
                    <TypeFilter types={types} setTypes={setTypes} />
                    <SearchFilter search={search} setSearch={setSearch} />
                </div>
                <PostList posts={posts} />
            </div>
        </div>
    )
}

export default FilterPanel