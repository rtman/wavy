import * as consts from 'consts';
import styled from 'styled-components';

export const ErrorMessage = styled.span`
  color: ${consts.ui.colors.error};
  border: none;
  padding: 15px 32px;
  margin: 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${consts.ui.fontSizes.default}px;
`;
