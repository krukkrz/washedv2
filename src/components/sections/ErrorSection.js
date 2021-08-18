import React from 'react';
import styled from 'styled-components';
import { Section } from '../global';
import errorImg from '../../images/art/team_work.png';

const ErrorSection = () => (
  <Section>
    <ErrorWrapper>
      <Image>
        <img src={errorImg}/>
      </Image>
      <Text>
        <h1>Ups... Wciąż pracujemy nad tą stroną.</h1>
      </Text>
    </ErrorWrapper>
  </Section>
)

const ErrorWrapper = styled.div`{
  text-align: center;
}`

const Text = styled.div`{
  h1 {
    font-family: ${props => props.theme.font.secondary};
  }
}`

const Image = styled.div`{
  width: 100%;
  
  img {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
}`

export default ErrorSection;