import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';

const Pricing = () => (
  <Section id="pricing">
    <Title>Wybierz plan odpowiedni dla Ciebie</Title>
    <PricingWrapper>
      <PricingItem>
        <h1>Premium</h1>
        <FeatureList>
          <li>
            dostęp do wszystkich artykułów
          </li>
          <li>
            pełny raport dla każdego artykułu
          </li>
        </FeatureList>
        <Price>10 zł miesięcznie</Price>
      </PricingItem>
      <PricingItem>
        <h1>Free</h1>
        <FeatureList>
          <li>
            darmowe 10 artykułów dziennie
          </li>
          <li>
            dostęp do częściowego raportu
          </li>
        </FeatureList>
        <Price>za darmo</Price>
      </PricingItem>
    </PricingWrapper>
  </Section>
)

const Price = styled.div`{
  font-size: 30px;
  position: absolute;
  bottom: 10px;
  width: 93%;
  text-align: center;
  
  color: white;
  background: black;
  padding-top: 5px;
  padding-bottom: 10px;
}`

const FeatureList = styled.ul`{
  text-align: left;
  margin-top: 40px;
  margin-bottom: 40px;
}`

const Title = styled.div`{
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  padding: 5px;
}`

const PricingWrapper = styled.div`{
  clear: both;
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}`

const PricingItem = styled.div`{
  float: left;
  margin: 10px;
  width: 300px;
  height: 300px;
  border-color: black;
  border-style: solid;
  text-align: center;
  padding: 10px;
  position: relative;

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-bottom: 30px;
    float: none;
  }
}`

export default Pricing;