import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, makeLargeImg }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem makeLargeImg={makeLargeImg} images={images} />
    </ul>
  );
};

export default ImageGallery;