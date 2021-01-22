import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ photos, onClick }) {
    return (
        photos.map(({ largeImageURL, webformatURL, tags, id }) => (
     <li className={styles.item} key={id} onClick={() => onClick(largeImageURL)}>
            <img className={styles.image} src={webformatURL} data-source={largeImageURL} alt={tags} />
    </li>
  )))
}

ImageGalleryItem.defaultProps = {
  original: '',
  preview: '',
  description: ''
};

ImageGalleryItem.propTypes = {
  original: PropTypes.string,
  preview: PropTypes.string,
  description : PropTypes.string
};

export default ImageGalleryItem;
