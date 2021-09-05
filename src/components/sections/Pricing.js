import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import PricingItem from '../common/PricingItem';
import LineVertical from '../common/Lines';

const Pricing = () => (
  <Section id='pricing'>
    <Title>Wybierz plan odpowiedni dla Ciebie</Title>
    <PricingWrapper>
      <PricingItem
        link='/error'
        heading='Premium'
        price='10 zł'
        features={[
          'dostęp do wszystkich artykułów',
          'pełny raport dla każdego artykułu',
          'możliwość udziału w weryfikacji nowych artykułów',
        ]}
      />
      <PricingItem
        link='/error'
        heading='Free'
        price='0 zł'
        features={[
          'darmowe 10 artykułów dziennie',
          'dostęp do częściowego raportu',
          'brak możliwości weryfikacji nowych artykułów',
        ]}
      />
    </PricingWrapper>
  </Section>
);


const Title = styled.div`{
  font-family: ${props => props.theme.font.primary};
  ${props => props.theme.font_size.large};
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;
  padding: 5px;
}`;

const PricingWrapper = styled.div`{
  clear: both;
  display: table;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
}`;

export default Pricing;