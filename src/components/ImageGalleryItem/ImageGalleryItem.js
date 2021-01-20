import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ photos }) {
    return (
        photos.map(({ largeImageURL, webformatURL, tags, id }) => (
     <li className={styles.item} key={id}>
            <a className={styles.link} href={largeImageURL} target="_blank" rel="noreferrer noopener"><img className={styles.image} src={webformatURL} data-source={largeImageURL} alt={tags}/>
        </a>
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
