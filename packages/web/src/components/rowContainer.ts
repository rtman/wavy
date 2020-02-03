import styled, { CSSObject, CSSProp } from 'styled-components';
import * as CSS from 'csstype';

interface RowContainerProps {
  width?: CSS.StandardLonghandProperties['width'];
  margin?: CSS.StandardShorthandProperties['margin'];
}

export const RowContainer = styled.div(
  (props: RowContainerProps): CSSObject => ({
    flexDirection: 'row',
    textAlign: 'center',
    display: 'flex',
    width: props.width ?? 'auto',
    margin: props.margin ?? '0px'
  })
);
