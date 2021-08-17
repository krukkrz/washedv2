import styled from 'styled-components';
import ExternalLink from './ExternalLink';

export const StyledExternalLink = styled(ExternalLink)`
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

export const StyledExternalLinkWhite = styled(ExternalLink)`
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
export default StyledExternalLinkWhite;