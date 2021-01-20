import React, { Component } from 'react';
//import Loader from './Loader/Loader';
//import Modal from './Modal/Modal'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
//import Button from './Button/Button';
//import shortid from 'shortid';
//import IconButton from './components/IconButton';
//import { ReactComponent as AddIcon } from './icons/add.svg';
import '../stylesheets/normalize.css';
import '../stylesheets/main.css';
import axios from 'axios';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    //searchQuery: 'yellow',
    page: 1,
  //  showModal: false,
  };
  componentDidMount() {
        axios
            .get(`https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=19150755-18ebc4fb910ab3d1add5e1d5a&image_type=photo&orientation=horizontal&per_page=12`)
            .then(response => this.setState({ photos: response.data.hits }))
            //.then(console.log(this.state.photos));
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

  addPhoto = text => {
    const photo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ photos }) => ({
      photos: [photo, ...photos],
    }));

    // this.toggleModal();
  };

  deletePhoto = photoId => {
    this.setState(({ photos }) => ({
      photos: photos.filter(({ id }) => id !== photoId),
    }));
  };

  toggleCompleted = photoId => {
    this.setState(({ photos }) => ({
      photos: photos.map(photo =>
        photo.id === photoId ? { ...photo, completed: !photo.completed } : photo,
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisiblePhotos = () => {
    const { filter, photos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return photos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  };
  
  calculateCompletedPhotos = () => {
    const { photos } = this.state;

    return photos.reduce(
      (total, photo) => (photo.completed ? total + 1 : total),
      0,
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
*/
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
    //const {  showModal } = this.state;//filter,photos
    //const totalPhotoCount = photos.length;
    //const completedPhotoCount = this.calculateCompletedPhotos();
    const searchedResult = this.getSearchedResult();
    console.log(this.state.photos);
    //const searchQuery = this.state.searchQuery;

    return (
      <>
        <Searchbar value={this.state.searchQuery} onChange={this.changeSearch} />
        {this.state.photos.length > 0 ? <ImageGallery><ImageGalleryItem photos={searchedResult} /></ImageGallery> : null}

      </>
    );
  }
}

export default App;

/*{{ searchQuery } !== '' && (
          <Loader />)}
        <IconButton onClick={this.toggleModal} aria-label="Добавить photo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> 
        <Filter value={filter} onChange={this.changeFilter} />

        <PhotoList
          photos={visiblePhotos}
          onDeletePhoto={this.deletePhoto}
          onToggleCompleted={this.toggleCompleted}
        />*/
        //<Modal>HHHHH</Modal>