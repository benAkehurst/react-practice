import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  opacity: ${(props) => (!props.disabled ? '1' : '0.5')};
  cursor: ${(props) =>
    !props.disabled ? 'pointer' : 'not-allowed !important'};
  border-radius: ${(props) => (props.corners ? '0px' : '4px')};
  box-shadow: ${(props) => (props.shadow ? '' : '')};
  width: 7.5rem;
  height: 4rem;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

class Button extends Component {
  render() {
    return (
      <StyledButton
        onClick={this.props.clicked ? (e) => this.props.clicked(e) : null}
      >
        {this.props.children}
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
