import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import mocks from '../../images/mocks/mockups.png';
import logoWhite from '../../images/logos/logo_white.svg';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import { StyledExternalLink } from '../common/StyledExternalLink';


const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "mockups" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Grid>
          <Art>
            <img src={mocks} alt='' />
          </Art>
          <Text>
            <h1>
              Zainstaluj zaplikację Washed.pl
            </h1>
            <p>I dołącz do społeczności, której można zaufać</p>
            <br />
            <br />
            <p>
              <StyledExternalLink href='/error'>
                Zainstaluj
              </StyledExternalLink>
            </p>
          </Text>
        </Grid>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <img src={logoWhite} />
              <br />
              <span>
                Illustrations by
                {` `}
                <ExternalLink href='https://twitter.com/diana_valeanu'>
                  @diana_valeanu
                </ExternalLink>
              </span>
            </Copyright>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
  margin-top: 60px;
`;

const Copyright = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.white.dark};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  img {
    width: 100%;
  }

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  margin-top: 60px;
  text-align: left;
  justify-self: center;
  
  margin-right: 50px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    text-align: center;
  }
`;
export default Footer;
