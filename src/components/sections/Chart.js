import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import chart from '../../images/art/pie_chart.png';

import { Section, Container } from '@components/global';

import StyledExternalLinkWhite from '../common/StyledExternalLink';

const UsedBy = () => (
  <StaticQuery
    query={graphql`
      query {
        art_chart: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "pie_chart" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="chart" accent>
        <StyledContainer>
          <div>
            <Text>
              <h1>52% Polaków</h1>
              <br/>
              <p>
                Tylu z nas twierdzi, że nie ufa informacjom podawanym w mediach. Jeżeli Ciebie też to męczy, dołącz do <b>Washed.pl</b>
              </p>
              <br/>
              <StyledExternalLinkWhite>
                Dołącz
              </StyledExternalLinkWhite>
            </Text>
          </div>
          <Art>
            <Img fluid={data.art_chart.childImageSharp.fluid} />
          </Art>
        </StyledContainer>
      </Section>
    )}
  />
);

const Text = styled.div`
  height: 60vh;
  color: white;
  width: 45vw;
  p {
    color: white;
    margin-bottom: 60px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

const Art = styled.figure`
  width: 600px;
  position: absolute;
  top: -20%;
  right: 50%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 500px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

export default UsedBy;
