export async function generateStaticParams(): Promise<{ articleType: string }[]> {
    return ['news', 'concepts', 'tutorials', 'projects'].map((articleType) => ({ articleType }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}