import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "header" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                A gdyby tak filtrować fake news?
              </h1>
              <p>W dzisiejszej dobie natłoku informacji coraz trudniej jest sprawdzać pochodzenie newsów i artykułów. Przenieś tą odpowiedzialność na <b>Washed.pl</b></p>
              <br />
              <br />
              <p>
                <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                  Dowiedz się więcej
                </StyledExternalLink>
                <StyledExternalLink2 href="https://github.com/ajayns/gatsby-absurd">
                  Zobacz plany
                </StyledExternalLink2>
              </p>
            </Text>
          </Grid>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: white;
  text-decoration: none;
  background: black;
  border-radius: 30px;
  font-size: 18px;
  padding: 15px 40px;
  margin-right: 5px;
  &:hover {
    color: black;
    background: #d7d3d3;
  }
`;

const StyledExternalLink2 = styled(ExternalLink)`
  color: black;
  text-decoration: none;
  background: white;
  border-radius: 30px;
  font-size: 18px;
  padding: 15px 40px;
  margin-right: 5px;
  &:hover {
    color: black;
    background: #d7d3d3;
  }
`;

export default Header;
