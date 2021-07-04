import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Searchbar.module.css';

class Searchbar extends Component {
  static defaultProps = { onSubmit: () => {} };
  static propTypes = { onSubmit: PropTypes.func };

  state = {
    searchQuery: '',
  };

  changeSearchQuery = e =>
    this.setState({ searchQuery: e.currentTarget.value });

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span>Search</span>
          </button>

          <input
            value={this.state.searchQuery}
            className={style.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeSearchQuery}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;