import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';

class Card extends Component {
  render() {
    return (
      <Aux>
        <div>Card</div>
      </Aux>
    );
  }
}

Card.propTypes = {
  edges: PropTypes.string,
  // 'straight' | 'rounded' | 'curved'
};

export default Card;
