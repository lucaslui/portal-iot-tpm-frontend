import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './header.module.scss'

import LogoImage from '../../assets/imgs/logo.svg'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image src={LogoImage} alt="logo" />
                <div>
                    <h1> Internet of Things K-Library </h1>
                    <h2>
                        Aiming to disseminate knowledge about the Internet of Things in a simple, practical and objective way
                    </h2>
                </div>
            </Link>
        </header>
    )
}

export default Header
