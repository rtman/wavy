import { StandardProperties } from 'csstype';
import styled, { CSSObject } from 'styled-components';

export const Image = styled.img(
  (props: StandardProperties): CSSObject => ({
    width: props.width ?? 'auto',
    margin: props.margin ?? '0px',
  })
);
