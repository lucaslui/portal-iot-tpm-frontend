'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './breadcrumb.module.scss'

const Breadcrumb = () => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <ul className={styles.breadcrumb}>
            <li><Link href={'/'}>Home</Link></li>
            {pathNames.length > 0}
            {
                pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${styles.active}` : ''
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{link}</Link>
                            </li>
                            {pathNames.length !== index + 1}
                        </React.Fragment>
                    )
                })
            }
        </ul>
    )
}

export default Breadcrumb