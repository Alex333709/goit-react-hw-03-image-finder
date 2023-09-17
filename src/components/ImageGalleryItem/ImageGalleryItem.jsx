import { Component } from 'react';
import {
  ImageGalleryItemContainer,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    largeImageURL: this.props.largeImageURL,
    tags: this.props.tags,
  };
  hendleImgClick = () => {
    this.props.onClick(this.state);
  };
  render() {
    const { webformatURL, tags } = this.props;

    return (
      <ImageGalleryItemContainer onClick={this.hendleImgClick}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryItemContainer>
    );
  }
}
