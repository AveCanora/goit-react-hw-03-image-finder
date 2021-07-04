import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    makeLargeImg: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.makeLargeImg();
    }
  };
  onClickModal = e => {
    if (e.currentTarget === e.target) {
      this.props.makeLargeImg();
    }
  };

  render() {
    const { children } = this.props;

    return createPortal(
      <div className={styles.Overlay} onClick={this.onClickModal}>
        <div className={styles.Modal}>{children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;