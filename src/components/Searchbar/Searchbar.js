import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ value, onChange, children, ...allyProps }) => (
  <>
      <header className={styles.searchbar}>
        <form className={styles.searchForm} >
          <button type="submit" className={styles.button}>
            <span className={styles.label}  {...allyProps}>{children}</span>
          </button>

          <input
            type='text'
            name='searchbar'
            autoComplete="off"
            autoFocus
            onChange={onChange}
            value={value}
            className={styles.input}
            placeholder='Search images and photos'
          />
        </form>
      </header>
  </>
);

Searchbar.defaultProps = {
  value: '',
  children: 'Search',
};

Searchbar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
    'aria-label': PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Searchbar;