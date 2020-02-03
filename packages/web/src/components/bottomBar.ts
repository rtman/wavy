import * as consts from 'consts';
import styled from 'styled-components';

export const BottomBar = styled.div({
  backgroundColor: consts.ui.colors.bgWhite,
  border: '1px black solid',
  padding: `15px 32px`,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: '100%',
  boxSizing: 'border-box'
});
