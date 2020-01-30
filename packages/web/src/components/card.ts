import * as consts from 'consts';
import styled from 'styled-components';

export const Card = styled.div({
  backgroundColor: consts.ui.colors.bgWhite,
  border: 'none',
  padding: `15px 32px`,
  margin: `8px`,
  textAlign: `left`,
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: `${consts.ui.fontSizes.secondaryTitle}px`,
  width: 'auto',
  '@media(min-width: 600px)': {
    width: '100%'
  }
});
