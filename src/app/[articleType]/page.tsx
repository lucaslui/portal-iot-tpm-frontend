import React from 'react'

import { ArticleModel } from '@/model/article'
import ArticleList from '@/components/article-list/article-list'

type Props = {
    params: {
        articleType: string
    }
}

const ArticlesByTypePage: React.FC<Props> = async ({ params }: { params: { articleType: string } }) => {

    const loadArticlePosts = async (): Promise<ArticleModel[]> => {
        const result = await fetch(`${process.env.API_URL}/api/portal/articles?type=${params.articleType}`)
        const data = await result.json()
        return data.articles
    }

    const articles = await loadArticlePosts()

    return (
        <ArticleList articles={articles} articleType={params.articleType}/>
    )
}

export default ArticlesByTypePage
