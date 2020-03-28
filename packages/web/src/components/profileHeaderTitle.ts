import styled, { CSSObject } from 'styled-components';
import * as consts from 'consts';

export const ProfileHeaderTitle = styled.div(
  (): CSSObject => ({
    position: 'absolute',
    bottom: '8px',
    left: '16px',
    color: consts.ui.colors.bgWhite,
    fontSize: `${consts.ui.fontSizes.bigTitle}px`,
    backgroundColor: 'black',
    padding: '8px',
  })
);
