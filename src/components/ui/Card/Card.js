import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';

const StyledArticle = styled.article``;
const CardMedia = styled.div``;
const CardImage = styled.img``;
const CardDate = styled.div``;
const CardDateDay = styled.span``;
const CardDateMonth = styled.span``;

const CardContent = styled.div``;
const CardContentHeader = styled.header``;
const CardContentTitle = styled.h2``;
const CardContentSubTitle = styled.div``;
const CardContentExcerpt = styled.p``;

const CardFooter = styled.footer``;
const CardFooterPostDate = styled.span``;
const CardFooterComments = styled.span``;

class Card extends Component {
  render() {
    return (
      <Aux>
        <StyledArticle>
          <CardMedia>
            <CardImage src="http://placehold.it/300x300" alt="card media" />
            <CardDate>
              <CardDateDay>27</CardDateDay>
              <CardDateMonth>Mar</CardDateMonth>
            </CardDate>
          </CardMedia>
          <CardContent>
            <CardContentHeader>
              <CardContentTitle>City Lights in New York</CardContentTitle>
              <CardContentSubTitle>
                The city that never sleeps
              </CardContentSubTitle>
            </CardContentHeader>
            <CardContentExcerpt>
              New York, the largest city in the U.S., is an architectural marvel
              with plenty of historic monuments, magnificent buildings and
              countless dazzling skyscrapers.
            </CardContentExcerpt>

            <CardFooter>
              <CardFooterPostDate>6 min ago</CardFooterPostDate>
              <CardFooterComments>39 comments</CardFooterComments>
            </CardFooter>
          </CardContent>
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
