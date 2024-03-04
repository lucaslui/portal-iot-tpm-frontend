import React from 'react'

import styles from './label-category.module.scss'

type Props = {
    name: string
}

const LabelCategory: React.FC<Props> = ({ name }: Props) => {
    return (
        <div className={styles.label_category}>
            {name}
        </div>
    )
}

export default LabelCategory