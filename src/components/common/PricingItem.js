import React from 'react';
import ExternalLink from './ExternalLink';
import styled from 'styled-components';
import { StyledExternalLink } from './StyledExternalLink';

function listFeatures(features) {
  return features.map(feature => (
    <li>{feature}</li>
  ));
}

const PricingItem = ({ heading, price, features, link }) => (
  <ExternalLink href={link}>
    <PricingBlock>
      <h1>{heading}</h1>
      <Price>{price}</Price>
      <FeatureList>
        {listFeatures(features)}
      </FeatureList>
      <StyledExternalLink>wybieram</StyledExternalLink>
    </PricingBlock>
  </ExternalLink>
);

const FeatureList = styled.ul`{
  text-align: left;
  margin-top: 40px;
  margin-bottom: 60px;
}`;

const Price = styled.div`{
  font-size: 100px;
  width: 93%;
  text-align: center;
  padding-top: 5px;
  font-family: ${props => props.theme.font.tertiary};
}`;


const PricingBlock = styled.div`{
  color: black;
  float: left;
  margin: 10px;
  width: 350px;
  height: 400px;
  text-align: center;
  padding: 10px;
  position: relative;

  h1 {
    font-size: 30px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 30px;
    float: none;
  }
}`;

export default PricingItem;