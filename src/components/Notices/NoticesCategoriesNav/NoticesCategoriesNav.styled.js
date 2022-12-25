import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'utils/device';

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${p => `${p.theme.space[3] + 4}px`};
`;

export const CategoryListItem = styled.li``;

export const CategoryPage = styled(NavLink)`
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  padding: ${p => `${p.theme.space[3]}px ${p.theme.space[5] - 4}px`};
  border-radius: ${p => p.theme.radii.xxl};

  border: ${p => `${p.theme.borders.normal}  ${p.theme.colors.button.accent}`};
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.text.secondaryText};

  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.nav};
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: ${p => p.theme.letterSpacing.l};

  transition: color ${p => p.theme.animation.cubic},
    background-color ${p => p.theme.animation.cubic};

  &.active,
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }

  &:hover {
    transform: scale(1.02);
  }

  @media ${device.tablet} {
    padding: ${p => `${p.theme.space[3] + 2}px ${p.theme.space[5] - 4}px`};
    font-size: ${p => p.theme.fontSizes.m};
  }
`;