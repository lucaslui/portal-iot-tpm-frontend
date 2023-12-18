export type ArticleModel = {
    id: string;
    title: string;
    description: string;
    type?: string;
    content: string;
    imageUrl: string;
    userId: string;
    categoryId: string;
    createdAt: string;
}