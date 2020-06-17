import * as consts from 'consts';
import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import styled from 'styled-components';

export const TextInput = styled(({ ...other }: TextFieldProps) => (
  <TextField {...other} />
))`
  && .MuiInput-underline::after {
    border-color: ${consts.ui.colors.textPrimary};
  }
`;
