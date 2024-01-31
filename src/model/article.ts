export type ArticleModel = {
    id: string;
    title: string;
    description: string;
    type?: string;
    content: string;
    imageUrl: string;
    userId: string;
    categories: string[];
    createdAt: Date;
}