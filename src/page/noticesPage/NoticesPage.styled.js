import styled from 'styled-components';
import { device } from 'utils/device';

export const Title = styled.h2`
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.text.sectionTitle};

  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSizes.xxl};
  }
`;
