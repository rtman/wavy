import styled, { CSSObject, CSSProp } from 'styled-components';
import * as CSS from 'csstype';
import * as consts from 'consts';

export const SongTitle = styled.div(() => ({
  fontSize: consts.ui.fontSizes.normal
}));

export const SongArtist = styled.div(() => ({
  fontSize: consts.ui.fontSizes.normal
}));
