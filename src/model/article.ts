export type ArticleModel = {
    id: string;
    title: string;
    description: string;
    type: 'article' | 'new' | 'tutorial' | 'project';
    content: string;
    imageUrl: string;
    userId: string;
    categoryIds: string[];
    updatedAt: Date;
    createdAt: Date;
}