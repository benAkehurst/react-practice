import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardMedia = styled.div``;
const CardImage = styled.img``;
const CardDate = styled.div``;
const CardDateDay = styled.span``;
const CardDateMonth = styled.span``;

const cardMedia = (props) => {
  return (
    <CardMedia>
      <CardImage src="http://placehold.it/300x300" alt="card media" />
      <CardDate>
        <CardDateDay>27</CardDateDay>
        <CardDateMonth>Mar</CardDateMonth>
      </CardDate>
    </CardMedia>
  );
};

cardMedia.propTypes = {
  // edges: PropTypes.string,
  // // 'straight' | 'rounded' | 'curved'
};

export default cardMedia;
