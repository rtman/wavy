import styled, { CSSObject } from 'styled-components';

export const ProfileHeaderImage = styled.img(
  (): CSSObject => ({
    width: '100%',
    maxHeight: '300px',
    objectFit: 'contain',
    objectPosition: 'top',
  })
);
