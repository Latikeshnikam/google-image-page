import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardImage = ({
  id,
  author,
  url,
  handleImageInfo,
}) => {
  return (
    <React.Fragment key={id}>
      <Card
        className="shadow"
        style={{
          cursor: 'pointer',
        }}
        onClick={() => handleImageInfo(id)}
      >
        <Card.Img variant="top" src={url} style={{height: '165px', width: '270px'}} />
        <Card.Body style={{ width: '200px', }}>
          <Card.Title style={{
            paddingLeft: '2px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: '100',
            fontSize: '15px',
            marginBottom: '0px'
           }}>
            {author}
           </Card.Title>
          <Card.Text style={{ color: 'grey', fontSize: '15px', textDecoration: 'underline',}}>
            {'google.com'}
          </Card.Text>
          {/*<Button variant="primary">Go somewhere</Button>*/}
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

CardImage.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  url: PropTypes.string,
  handleImageInfo: PropTypes.func,
}

export default CardImage;
