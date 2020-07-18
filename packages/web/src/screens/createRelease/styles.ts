import { WithTheme } from '@material-ui/core/styles';
import styled, { CSSObject } from 'styled-components';

import { Flex } from '../../components/flex';

export const DropzoneContainer = styled.div(
  (props: { borderColor: string } & WithTheme): CSSObject => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: props.borderColor,
    borderStyle: 'dashed',
    // backgroundColor: props.theme.palette.background.default,
    // color: props.theme.palette.background.default,
    outline: 'none',
    transition: 'border 0.24s ease-in-out',
    id: 'dropzone',
    cursor: 'pointer',
  })
);
