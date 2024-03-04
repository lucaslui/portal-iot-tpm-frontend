import React from 'react'

import styles from './category-list.module.scss'

import LabelCategory from '@/components/label-category/label-category'
import { ArticleViewModel } from '@/model/article'

type CategoryListProps = {
    categories: ArticleViewModel['categories']
}

const CategoryList: React.FC<CategoryListProps> = (props: CategoryListProps) => {
    return (
        <ul className={styles.category_list}>
            {props.categories?.map((category, index) => (
                <li key={index}>
                    <LabelCategory name={category.name} />
                </li>
            ))}
        </ul>
    )
}

export default CategoryList