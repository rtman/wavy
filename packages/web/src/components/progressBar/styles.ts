import * as consts from 'consts';
import styled, { CSSObject } from 'styled-components';

export const TimeText = styled.div(
  (): CSSObject => ({
    fontSize: `${consts.ui.fontSizes.normal}px`,
  })
);
