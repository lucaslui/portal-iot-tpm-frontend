'use client';

import React from 'react'

import styles from './post-list.module.scss'

type Props = {
    posts: any[];
}

const PostList: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.post_list}>
            <div className={styles.container}>
                {
                    props.posts?.length > 0 &&
                    props.posts.map((post, index) => (
                        <div key={index} className={styles.post_item}>
                            <div className={styles.post_item_title}>
                                {post.title}
                            </div>
                            <div className={styles.post_item_description}>
                                {post.description}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PostList
