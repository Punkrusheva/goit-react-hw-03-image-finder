
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

function ImageGallery({ children }) {
    return (
        <ul className={styles.imageGallery}>{children}</ul>
    )
}
        
ImageGallery.defaultProps = {
  children: "",
};

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;