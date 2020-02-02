import TextField from '@material-ui/core/TextField';
import * as consts from 'consts';
import React from 'react';
import styled from 'styled-components';

export const TextInput = styled(({ color, ...other }: any) => <TextField {...other} />)`
  && .MuiInput-underline::after {
    border-color: ${consts.ui.colors.textPrimary};
  }
`;
