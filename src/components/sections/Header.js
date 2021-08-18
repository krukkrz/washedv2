import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';
import { StyledExternalLink } from '../common/StyledExternalLink';

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
      <section id="home">
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
                  <StyledExternalLink href="/more">
                    Dowiedz się więcej
                  </StyledExternalLink>
                  <BreakOnSmall />
                  <StyledExternalLink2 href="/#pricing">
                    Zobacz plany
                  </StyledExternalLink2>
                </p>
              </Text>
            </Grid>
          </Container>
        </HeaderWrapper>
      </section>
    )}
  />
);

const HeaderWrapper = styled.header`
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

const BreakOnSmall = styled.div`{
  display: none;
  height: 30px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: inherit;
  }
}`

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

const StyledExternalLink2 = styled(ExternalLink)`
  color: black;
  text-decoration: none;
  background: #d7d3d3;
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
