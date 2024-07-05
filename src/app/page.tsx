import React from 'react'

import styles from './page.module.scss'

import { ArticleViewModel } from '@/model/article'
import PostCardFlexible from '@/components/article-card-flexible/post-card-flexible'
import Link from 'next/link'
import CourseHomeCard from '@/components/course-home-card/course-home-card'
import { CourseModel } from '@/model/course'

const loadPosts = async (): Promise<ArticleViewModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/articles`, {
        next: {
            revalidate: 10
        }
    })
    const data = await result.json()
    return data.articles
}

const loadCourses = async (): Promise<CourseModel[]> => {
    const result = await fetch(`${process.env.API_URL}/api/courses`, {
        next: {
            revalidate: 10
        }
    })
    if (!result.ok) {
        return []
    }
    const payload = await result.json()
    return payload.data
}

const HomePage: React.FC = async () => {

    const articles = await loadPosts()
    const courses = await loadCourses()

    return (
        <div className={styles.home}>
            <div className={styles.concepts}>
                {/* <div className={styles.title}>
                    <h3>Oferencimentos</h3>
                    <Link href="/concepts">Ver todos</Link>
                </div> */}
                <div className={styles.feed}>
                    {
                        courses
                            .map(course => {
                                return (
                                    <CourseHomeCard key={course.id} course={course} />
                                )
                            })
                    }
                    <div className={styles.spacer}></div>
                </div>
            </div>
            <div className={styles.concepts}>
                <div className={styles.title}>
                    <h3>Últimos Artigos</h3>
                    <Link href="/concepts">Ver todos</Link>
                </div>
                <div className={styles.feed}>
                    {
                        articles
                            .filter(article => article.type === 'concepts')
                            .map((article: ArticleViewModel) => {
                                return (
                                    <PostCardFlexible key={article.id} article={article} />
                                )
                            })
                    }
                    <div className={styles.spacer}></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage