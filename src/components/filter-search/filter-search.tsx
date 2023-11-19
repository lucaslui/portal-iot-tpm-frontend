'use client'

import styles from './filter-search.module.scss'

type Props = {
    search: string;
    setSearch: (text: string) => void;
}

const SearchFilter: React.FC<Props> = (props: Props) => {
    return (
        <div className={styles.filter_search}>
            <label>Search:</label>
            <input
                type="text"
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}
            />
        </div>
    );
};

export default SearchFilter;


