import React from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ value, onChange }) => (
    <>
         <label
            className={styles.searchbar}>
          <input
                type='text'
                value={value}
                onChange={onChange}
                name='searchbar'
                className={styles.searchForm}
                placeholder='Search'
            />
        </label>
    </>
);

export default Searchbar;