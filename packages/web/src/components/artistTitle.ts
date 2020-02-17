import styled, { CSSObject } from 'styled-components';
import * as consts from 'consts';

export const ArtistTitle = styled.div(
  (): CSSObject => ({
    position: 'absolute',
    bottom: '8px',
    left: '16px',
    color: consts.ui.colors.bgWhite,
    fontSize: `${consts.ui.fontSizes.bigTitle}px`
  })
);
