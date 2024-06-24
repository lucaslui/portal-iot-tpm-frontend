import React from 'react'

import styles from './footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <span>© {new Date().getFullYear()} Portal IoT-TpM Unicamp. All rights reserved. </span>
        </footer>
    )
}

export default Footer
