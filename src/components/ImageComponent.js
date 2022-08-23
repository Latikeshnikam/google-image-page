import React from "react";
import CardImage from '../shared/card';
import ImageDetails from './ImageDetails';
import { CardGroup, Row, Col, Button } from 'react-bootstrap';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types';

const ImageComponent = ({
  imageList,
  imageDetails,
  handleImageList,
  handleImageInfo,
  showDetails,
  handleClose,
}) => {
  return(
    <>
    <InfiniteScroll
        dataLength={imageList.length}
        next={handleImageList}
        hasMore={true}
        loader={<h4 style={{textAlign: 'center'}}>Loading...</h4>}
      >
    <div className="d-flex flex-wrap gap-3 justify-content-center" >
          {imageList.map((image) => {
            return (
              <CardImage
                id={image.id}
                author={image.author}
                url={image.download_url}
                handleImageInfo={handleImageInfo}
              />
            )
          })}

    </div>
    </InfiniteScroll>
    <ImageDetails imageDetails={imageDetails} showDetails={showDetails} handleClose={handleClose} />
    </>
  )
};

ImageComponent.propTypes = {
  imageList: PropTypes.array,
  imageDetails: PropTypes.object,
  handleImageList: PropTypes.func,
  handleImageInfo: PropTypes.func,
  handleClose: PropTypes.func,
  showDetails: PropTypes.bool,
}

export default ImageComponent;
