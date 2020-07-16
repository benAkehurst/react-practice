import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import CardMedia from './CardMedia/CardMedia';
import CardContent from './CardContent/CardContent';

const StyledArticle = styled.article`
  width: 20rem;
  padding: 1rem;
  background: #fff;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: ${(props) => (props.edges ? '0.5rem' : null)};
`;

class Card extends Component {
  render() {
    return (
      <Aux>
        <StyledArticle edges={this.props.edges}>
          <CardMedia></CardMedia>
          <CardContent></CardContent>
        </StyledArticle>
      </Aux>
    );
  }
}

Card.propTypes = {
  edges: PropTypes.bool,
};

export default Card;
