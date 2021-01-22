import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import Load from './Loader/Loader';
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';
import { ImSearch } from 'react-icons/im';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    page: 1,
    showModal: false,
    loading: false,
    key: '19150755-18ebc4fb910ab3d1add5e1d5a',
    url: 'https://pixabay.com/api/',
  };
  
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(()=>{
    axios
      .get(`${this.state.url}?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(response => this.setState({ photos: response.data.hits }))
      .finally(() => this.setState({ loading: false }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const nextPage = this.state.page;
    const prevPage = prevState.page;

    if (nextPage !== prevPage) {
      this.setState({ loading: true });
      setTimeout(()=>{
       axios
        .get(`${this.state.url}?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => this.setState({ photos: [...prevState.photos, ...response.data.hits] }))
        .then(window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        }))
         .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }
  
  toggleModal = (largeImageURL) => {
    this.setState(({ showModal }) => ({showModal: !showModal}));
    this.setState({ largeImage: largeImageURL });
  };

  onButtonClick = e => {
    e.preventDefault();
    this.setState(
      {page: this.state.page + 1 } 
    );
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
    
    return (
      <>
        <Searchbar value={searchQuery}
          aria-label='Search'
          onChange={this.changeSearch}>
          <ImSearch />
        </Searchbar>
        
        {photos.length > 0 ?
          <ImageGallery>
            <ImageGalleryItem
              photos={searchedResult}
              onClick={this.toggleModal}
            />
          </ImageGallery> : null}
        
        {showModal &&
          <Modal onClose={this.toggleModal}>
          <img src={largeImage} alt={tags}/>
          </Modal>}

        {this.state.loading &&
          <Load 
          type="ThreeDots"
          color="#3f51b5"
          height={45}
          width={45}
          timeout={6000}
          />}
        
        {searchedResult.length >= 11 ?
          <Button
            aria-label='Load more'
            onClick={this.onButtonClick}>
          </Button> : null}
      </>
    );
  }
}

export default App;