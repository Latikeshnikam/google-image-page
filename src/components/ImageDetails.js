import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PropTypes from 'prop-types';

const ImageDetails = ({ showDetails, imageDetails, handleClose}) => {

  return (
    <>
        <Offcanvas show={showDetails} onHide={handleClose} placement="end" style={{zIndex: '1050',}}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{imageDetails.author}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <a href={imageDetails.url} style={{justifyContent: 'center'}} target="_blank">
              <img src={imageDetails.download_url} height="250px" />
              Click here to visit website.
            </a>
          </Offcanvas.Body>
        </Offcanvas>
    </>
  );
}

ImageDetails.propTypes = {
  showDetails: PropTypes.bool,
  imageDetails: PropTypes.object,
  handleClose: PropTypes.func,
}

export default ImageDetails;
