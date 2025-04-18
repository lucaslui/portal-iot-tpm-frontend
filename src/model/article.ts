export type ArticleType = 'concepts' | 'news' | 'tutorials' | 'projects'

export type ArticleState = 'draft' | 'published' | 'deleted'

export type ArticleModel = {
    id: string;
    title: string;
    description: string;
    type: ArticleType;
    content: string;
    imageUrl: string;
    userId: string;
    categoryIds: string[];
    updatedAt: Date;
    createdAt: Date;
}

export type ArticleViewModel = {
    id: string
    title: string
    description: string
    type: ArticleType
    state: ArticleState
    readTime: number
    content: string
    imageUrl: string
    user: {
        id: string
        name: string
        email: string
        occupation?: string
        interests?: string
        about?: string
        imageUrl?: string
    }
    categories: {
        id: string
        name: string
        description: string
    }[]
    updatedAt: Date
    createdAt: Date
}