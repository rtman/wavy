import * as consts from 'consts';
import styled, { css } from 'styled-components';

export const Button = styled.button`
  background: ${consts.ui.colors.textPrimary};
  color: ${consts.ui.colors.textWhite};
  border: none;
  padding: 15px 32px;
  margin: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${consts.ui.fontSizes.secondaryTitle}px;
  ${(props: { secondary?: boolean }) =>
    props.secondary &&
    css`
      background: ${consts.ui.colors.bgWhite};
      color: ${consts.ui.colors.textPrimary};
    `}
`;
