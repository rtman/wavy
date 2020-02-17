import styled, { CSSObject, CSSProp } from 'styled-components';
import * as consts from 'consts';

export const SongTitle = styled.div(() => ({
  fontSize: consts.ui.fontSizes.normal,
  cursor: 'pointer'
}));

export const SongArtist = styled.div(() => ({
  fontSize: consts.ui.fontSizes.normal,
  cursor: 'pointer'
}));
