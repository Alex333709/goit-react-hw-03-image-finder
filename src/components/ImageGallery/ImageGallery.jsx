import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';
const ImageGallery = ({ hits, onClick }) => {
  return (
    <div>
      <ImageGalleryContainer>
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
          />
        ))}
      </ImageGalleryContainer>
    </div>
  );
};

export default ImageGallery;
