import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';
// import PropTypes from 'prop-types'

class Looader extends Component {
  render() {
    return (
      <Loader
        className={s.Loader}
        timeout={3000}
        type="ThreeDots"
        color="rgb(61, 61, 61)"
        height={80}
        width={80}
      />
    );
  }
}

export default Looader;