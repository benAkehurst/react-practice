import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return <button>Button</button>;
  }
}

Button.propTypes = {
  size: PropTypes.string,
  /**
   'small' | 'medium' | 'large'
  */
  disabled: PropTypes.bool,
  /**
   If `true`, the button is disabled
  */
  corners: PropTypes.string,
  /**
   'rounded'
  */
  shadow: PropTypes.string,
  /**
   'shadow'
  */
  buttonType: PropTypes.string,
  /**
   'success' | 'error' | 'basic' | 'black' | 'white'
  */
  clicked: PropTypes.func,
  /**
   If `true`, gets an event to fire when the button is clicked
  */
};

export default Button;
