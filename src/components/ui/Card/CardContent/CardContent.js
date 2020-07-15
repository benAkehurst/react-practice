import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const CardContent = styled.div``;
const CardContentHeader = styled.header``;
const CardContentTitle = styled.h2``;
const CardContentSubTitle = styled.div``;
const CardContentExcerpt = styled.p``;

const CardFooter = styled.footer``;
const CardFooterPostDate = styled.span``;
const CardFooterComments = styled.span``;

const cardContent = (props) => {
  return (
    <CardContent>
      <CardContentHeader>
        <CardContentTitle>City Lights in New York</CardContentTitle>
        <CardContentSubTitle>The city that never sleeps</CardContentSubTitle>
      </CardContentHeader>
      <CardContentExcerpt>
        New York, the largest city in the U.S., is an architectural marvel with
        plenty of historic monuments, magnificent buildings and countless
        dazzling skyscrapers.
      </CardContentExcerpt>

      <CardFooter>
        <CardFooterPostDate>6 min ago</CardFooterPostDate>
        <CardFooterComments>39 comments</CardFooterComments>
      </CardFooter>
    </CardContent>
  );
};

cardContent.propTypes = {
  // edges: PropTypes.string,
  // // 'straight' | 'rounded' | 'curved'
};

export default cardContent;
