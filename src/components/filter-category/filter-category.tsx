'use client'

import { useState } from 'react';
import styles from './filter-category.module.scss'

import { tree } from '@/model/methodology';

type Props = {
    categories: string[];
    setCategories: (categories: string[]) => void;
}

const CategoryFilter: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.filter_category}>
            <label>Filter category:</label>
            <Nodes nodes={tree} categories={props.categories} setCategories={props.setCategories} />
        </div>
    );
};

type Node = {
    title: string
    category: string
    nodes: Node[]
}

type NodesProps = {
    categories: string[]
    setCategories: (categories: string[]) => void
    nodes: Node[]
    level?: number
}

const Nodes: React.FC<NodesProps> = (props: NodesProps) => {
    const [indexSelectedNode, setIndexSelectedNode] = useState<number | undefined>()

    const isItemActivated = (category: string) => {
        return props.categories.includes(category) ? styles.active : ""
    }

    const handleActivatedCategory = (category: string, index: number) => {
        if (props.categories.includes(category)) {
            props.setCategories(props.categories.filter(o => o !== category));
            return;
        } else {
            props.setCategories([...props.categories, category]);
        }
        if (indexSelectedNode !== undefined) {
            setIndexSelectedNode(undefined)
            props.setCategories(props.categories.filter(o => props.nodes[indexSelectedNode].nodes.map(o => o.category).includes(o)));
        } else {
            setIndexSelectedNode(index)
        }
    }

    const handleDeactivate = (index: number) => {
        const indexAfterRemoveCategories = props.categories.findIndex(category => category === props.nodes[index].category)
        props.setCategories(props.categories.slice(0,indexAfterRemoveCategories));
        setIndexSelectedNode(undefined)
    }

    return (
        <>
            {
                props.nodes.length > 0 &&
                <div className={styles.container}>
                    {
                        indexSelectedNode !== undefined ?
                            <div className={styles.box}>
                                <div className={`${styles.stage} ${styles.active}`} onClick={() => handleDeactivate(indexSelectedNode)}>{props.nodes[indexSelectedNode].title}</div>
                                {props.nodes[indexSelectedNode].nodes.length > 0 && <div className={styles.arrow_down} />}
                                <Nodes nodes={(props.nodes[indexSelectedNode].nodes)} categories={props.categories} setCategories={props.setCategories} />
                            </div>
                            : props.nodes.map((item, index) => (
                                <div key={index} className={styles.box}>
                                    {
                                        <div
                                            className={`${styles.stage} ${isItemActivated(item.category)}`}
                                            onClick={() => handleActivatedCategory(item.category, index)}
                                        >
                                            {item.title}
                                        </div>
                                    }
                                </div>
                            ))
                    }
                </div>
            }
        </>
    )
}

export default CategoryFilter;


