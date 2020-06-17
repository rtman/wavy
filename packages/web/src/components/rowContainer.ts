import * as CSS from 'csstype';
import styled, { CSSObject } from 'styled-components';

export const RowContainer = styled.div(
  (props: CSS.StandardProperties): CSSObject => ({
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    width: props.width ?? 'auto',
    margin: props.margin ?? '0px',
    justifyContent: props.justifyContent ?? 'flex-start',
  })
);
