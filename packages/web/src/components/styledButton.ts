import { Button } from '@material-ui/core';
import styled, { css, CSSObject } from 'styled-components';
import { StandardProperties } from 'csstype';

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    min-width: 32px;
  }
`;

// document.querySelector("#root > div > div.sc-fzXfLT.eCXBhG > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-text.sc-fzXfMz.cNkFBk")
