import * as consts from 'consts';
import styled, { CSSObject } from 'styled-components';

export const ContentContainer = styled.div(
  (): CSSObject => ({
    backgroundColor: consts.ui.colors.bgWhite,
    flex: '1',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
    width: '100%',
    boxSizing: 'border-box',
    height: '100%'
  })
);
