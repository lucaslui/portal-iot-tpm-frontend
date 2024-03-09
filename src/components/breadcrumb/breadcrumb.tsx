'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './breadcrumb.module.scss'
import articleI18N from '@/i18n/article'

type Props = {
    articleTitle: string
}

const Breadcrumb: React.FC<Props> = (props: Props) => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <ul className={styles.breadcrumb}>
            <li>
                <Link href={'/'}>
                    <i className={`fas fa-home`} />
                </Link>
            </li>
            {pathNames.length > 0}
            {
                pathNames.slice(0, -1).map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    return (
                        <React.Fragment key={index}>
                            <li style={{ textTransform: 'capitalize' }}>
                                <Link href={href}>{articleI18N.pt[link as keyof typeof articleI18N.pt]}</Link>
                            </li>
                            {pathNames.length !== index + 1}
                        </React.Fragment>
                    )
                })
            }
            <li>
                <Link href={`/${pathNames.join('/')}`}>{props.articleTitle}</Link>
            </li>
        </ul >
    )
}

export default Breadcrumb