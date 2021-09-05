import styled from 'styled-components';
import React from 'react';

const LineVertical = () => (
  <Line/>
)

const Line = styled.div`{
  float: left;
  position: relative;
  border-right: 2px solid black;
  height: 320px;
  margin-top: 3em;
  margin-right: 7em;
  margin-left: 7em;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
}`;

export default LineVertical;