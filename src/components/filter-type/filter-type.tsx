'use client'

import React from 'react';

import styles from './filter-type.module.scss'

type Props = {
    types: string[];
    setTypes: (type: string[]) => void;
}

const TypeFilter: React.FC<Props> = (props: Props) => {

    const handleClick = (type: string) => {
        if (props.types.includes(type)) {
            props.setTypes(props.types.filter(item => item !== type));
            return;
        } else {
            props.setTypes([...props.types, type]);
        }
    }

    const isTypeActivated = (type: string) => {
        return props.types.includes(type) ? styles.active : '';
    }

    return (
        <div className={styles.filter_type}>
            <label>Filter type:</label>
            <div className={`${styles.item} ${isTypeActivated('articles')}`} onClick={() => handleClick('articles')}> Articles </div>
            <div className={`${styles.item} ${isTypeActivated('news')}`} onClick={() => handleClick('news')}> News </div>
            <div className={`${styles.item} ${isTypeActivated('tutorials')}`} onClick={() => handleClick('tutorials')}> Tutorials </div>
            <div className={`${styles.item} ${isTypeActivated('projects')}`} onClick={() => handleClick('projects')}> Projects </div>
        </div>
    );
};

export default TypeFilter;


