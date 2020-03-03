import styled, { css, CSSObject } from 'styled-components';
import * as consts from 'consts';

export const SongTitle = styled.div(
  (): CSSObject => ({
    fontSize: consts.ui.fontSizes.description,
    cursor: 'pointer',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  `
  &:hover {
    text-decoration: underline
  }`
);

export const SongArtist = styled.div(
  (): CSSObject => ({
    fontSize: `${consts.ui.fontSizes.small}px`,
    cursor: 'pointer',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }),
  `
  &:hover {
    text-decoration: underline
  }`
);

export const SongInfoContainer = styled.div(
  (): CSSObject => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minWidth: `${window.innerWidth * 0.2}px`
  })
);
