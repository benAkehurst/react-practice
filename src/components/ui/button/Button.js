import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  opacity: ${(props) => (props.disabled ? '0.5' : '0')}
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')}
  border-radius: ${(props) => (props.corners ? '0px' : '4px')}
  box-shadow: ${(props) => (props.shadow ? '' : '')}
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        onClick={this.props.clicked ? (e) => this.props.clicked(e) : null}
      >
        Button
      </StyledButton>
    );
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
  corners: PropTypes.bool,
  /**
   If `true`, the button has rounded corners
  */
  shadow: PropTypes.bool,
  /**
   If `true`, the button will have a drop shadow
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
