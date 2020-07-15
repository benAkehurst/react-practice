import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import CardMedia from './CardMedia/CardMedia';
import CardContent from './CardContent/CardContent';

const StyledArticle = styled.article``;

class Card extends Component {
  render() {
    return (
      <Aux>
        <StyledArticle>
          <CardMedia></CardMedia>
          <CardContent></CardContent>
        </StyledArticle>
      </Aux>
    );
  }
}

Card.propTypes = {
  edges: PropTypes.string,
  // 'straight' | 'rounded' | 'curved'
};

export default Card;
