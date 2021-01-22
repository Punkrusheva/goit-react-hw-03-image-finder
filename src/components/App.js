import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Loader from "react-loader-spinner";
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    page: 1,
    showModal: false,
    key: '19150755-18ebc4fb910ab3d1add5e1d5a',
  };
  componentDidMount() {
        axios
            .get(`https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => this.setState({ photos: response.data.hits }))
  }
/*
  componentDidMount() {
    // console.log('App componentDidMount');

    const photos = localStorage.getItem('photos');
    const parsedPhotos = JSON.parse(photos);

    if (parsedPhotos) {
      this.setState({ photos: parsedPhotos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('App componentDidUpdate');

    const nextPhotos = this.state.photos;
    const prevPhotos = prevState.photos;

    if (nextPhotos !== prevPhotos) {
      console.log('Обновилось поле photos, записываю photos в хранилище');
      localStorage.setItem('photos', JSON.stringify(nextPhotos));
    }

    if (nextPhotos.length > prevPhotos.length && prevPhotos.length !== 0) {
      this.toggleModal();
    }
  }

*/
  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  
    this.setState({ largeImage: largeImageURL });
  };

  onButtonClick = e => {
     e.preventDefault();
    
    this.setState(
      {page: this.state.page + 1 } 
    );
    console.log('Click', this.state.page);
   /*axios
            .get(`https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=19150755-18ebc4fb910ab3d1add5e1d5a&image_type=photo&orientation=horizontal&per_page=12`)
     .then(response => this.setState(prevState => { return { photos: [...prevState.photos, response.data.hits] } }))
   
    window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});*/
  }

  changeSearch = e => {
    const { searchQuery } = this.state;
    this.setState({  searchQuery : e.currentTarget.value });
    console.log(searchQuery);
  };

  getSearchedResult = () => {
    const { photos, searchQuery } = this.state;
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();
    return photos.filter(photo =>
      photo.tags.toLowerCase().includes(normalizedSearchQuery)
    );
  }
  render() {
    const { searchQuery, photos, showModal, largeImage, tags } = this.state;
    const searchedResult = this.getSearchedResult();
    console.log(searchedResult);
    
    return (
      <>
        <Searchbar value={searchQuery} onChange={this.changeSearch} />
        
        {photos.length > 0 ? <ImageGallery><ImageGalleryItem photos={searchedResult} onClick={this.toggleModal} /></ImageGallery> : null}
        
        {showModal && <Modal onClose={this.toggleModal} >
          <img src={largeImage} alt={tags} />
          <button type='button' onClick={this.toggleModal}>x</button>
        </Modal>}
                
        {searchedResult.length > 11 ? <Button aria-label='Load more' onClick={this.onButtonClick}>
          <Loader
            type="ThreeDots"
            color="#FFFFFF"
            height={20}
            width={20}
            timeout={3000} 
          />
        </Button> : null}
      </>
    );
  }
}

export default App;

/**{photos.page > 1 ? <ImageGallery><ImageGalleryItem photos={searchedResult} onClick={this.toggleModal} /></ImageGallery> : null} */