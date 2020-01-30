import * as consts from 'consts';
import styled from 'styled-components';

export const ContentContainer = styled.div({
  backgroundColor: consts.ui.colors.bgWhite,
  border: '1px black solid',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: '100%',
  boxSizing: 'border-box',
  height: '100%'
});
