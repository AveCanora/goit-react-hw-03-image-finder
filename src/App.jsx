import { Component } from 'react';
import s from './App.module.css';

import fetchImg from "./components/API/Pixabay";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Looader from "./components/Loader";

class App extends Component {
  state = {
    isLoading: false,
    largeURL: '',
    images: [],
    query: '',
    pageNumber: 1,
    error: null,
    tags: '',
  };

  componentDidUpdate(PrevProps, prevState) {
    if (this.state.query !== prevState.query) {
      this.getImages();
    }
    if (this.state.pageNumber > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  makeLargeImg = (largeURL, tags) => {
    return this.setState({ largeURL, tags });
  };

  onSubmit = searchQuery => {
    this.setState({
      query: searchQuery,
      images: [],
      pageNumber: 1,
      largeURL: '',
      error: null,
      tags: '',
    });
  };

  getImages = () => {
    const { query, pageNumber } = this.state;
    this.setState({ isLoading: true });

    fetchImg({ query, pageNumber })
      .then(newImages =>
        this.setState(({ images, pageNumber }) => {
          return {
            images: [...images, ...newImages],
            pageNumber: pageNumber + 1,
          };
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  render() {
    const { images, isLoading, largeURL, error, tags } = this.state;

    return (
      <div className={s.App}>
        {error && (
          <span style={{ color: 'red', fontSize: 46 }}>
            Something went wrong:{error.message}
          </span>
        )}
        <Searchbar onSubmit={this.onSubmit} />

        <ImageGallery makeLargeImg={this.makeLargeImg} images={images} />

        {images.length > 0 && !isLoading && <Button onClick={this.getImages} />}

        {isLoading && <Looader />}

        {largeURL && (
          <Modal makeLargeImg={this.makeLargeImg}>
            <img src={largeURL} alt={tags} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;