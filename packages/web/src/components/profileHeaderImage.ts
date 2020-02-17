import styled, { CSSObject } from 'styled-components';

export const ProfileHeaderImage = styled.img(
  (): CSSObject => ({
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    objectPosition: 'top'
  })
);