import * as consts from 'consts';
import styled from 'styled-components';

export const Card = styled.div({
  backgroundColor: consts.ui.colors.bgWhite,
  border: '1px black solid',
  padding: `15px 32px`,
  margin: `8px`,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: '70%',
  // height: '100%',
  '@media(max-width: 600px)': {
    width: '100%'
  }
});
