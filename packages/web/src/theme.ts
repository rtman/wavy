import { darken, desaturate, lighten, opacify, transparentize } from 'polished';

import { AutocompleteClassKey } from '@material-ui/lab/Autocomplete';
import { BreakpointValues } from '@material-ui/core/styles/createBreakpoints';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Overrides as CoreOverrides } from '@material-ui/core/styles/overrides';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { createMuiTheme } from '@material-ui/core';

const PRIMARY_COLOR = (_darkMode: boolean) => '#00bcd4';
const PRIMARY_CONTRAST = (_darkMode: boolean) => '#fff';
const PRIMARY_BLACK = (_darkMode: boolean) => '#000';
const PRIMARY_BACKGROUND_COLOR = (_darkMode: boolean) => '#fff';
const PRIMARY_WHITE = (_darkMode: boolean) => '#fff';
const SECONDARY_COLOR = (_darkMode: boolean) => '#00838f';
const SECONDARY_CONTRAST = (_darkMode: boolean) => '#fff';
const ERROR_COLOR = (_darkMode: boolean) => 'rgb(253, 136, 114)';
const ERROR_CONTRAST = (_darkMode: boolean) => '#fff';
const DIVIDER_COLOR = (_useDarkMode: boolean) => 'rgba(0, 0, 0, 0.1)';

const defaultTheme = createMuiTheme();

export const makeTheme = () => {
  const useDarkMode = false; // useMediaQuery('(prefers-color-scheme: dark)');

  const palette: PaletteOptions = {
    background: {
      default: PRIMARY_BACKGROUND_COLOR(useDarkMode),
      paper: transparentize(0.7)(
        useDarkMode
          ? lighten(0.1)(PRIMARY_BACKGROUND_COLOR(true))
          : darken(0.1)(PRIMARY_BACKGROUND_COLOR(false))
      ),
    },
    action: {
      active: PRIMARY_COLOR(useDarkMode),
      disabled: useDarkMode
        ? darken(0.4)(PRIMARY_BLACK(true))
        : lighten(0.4)(PRIMARY_BLACK(false)),
      disabledBackground: transparentize(0.5)(
        desaturate(1)(PRIMARY_COLOR(useDarkMode))
      ),
      hover: transparentize(0.5, PRIMARY_COLOR(useDarkMode)),
      selected: transparentize(0.9)(PRIMARY_COLOR(useDarkMode)),
    },
    common: {
      black: PRIMARY_BLACK(useDarkMode),
      white: PRIMARY_WHITE(useDarkMode),
    },
    divider: DIVIDER_COLOR(useDarkMode),
    error: {
      contrastText: ERROR_CONTRAST(useDarkMode),
      dark: ERROR_COLOR(true),
      light: ERROR_COLOR(false),
      main: ERROR_COLOR(useDarkMode),
    },
    primary: {
      contrastText: PRIMARY_CONTRAST(useDarkMode),
      dark: PRIMARY_COLOR(true),
      light: PRIMARY_COLOR(false),
      main: PRIMARY_COLOR(useDarkMode),
    },
    secondary: {
      contrastText: SECONDARY_CONTRAST(useDarkMode),
      dark: SECONDARY_COLOR(true),
      light: SECONDARY_COLOR(false),
      main: SECONDARY_COLOR(useDarkMode),
    },
    text: {
      disabled: useDarkMode
        ? darken(0.4)(PRIMARY_BLACK(true))
        : lighten(0.4)(PRIMARY_BLACK(false)),
      primary: PRIMARY_BLACK(useDarkMode),
      secondary: useDarkMode
        ? darken(0.4, PRIMARY_BLACK(useDarkMode))
        : lighten(0.4, PRIMARY_BLACK(useDarkMode)),
    },
    type: useDarkMode ? 'dark' : 'light',
  };

  const typography: TypographyOptions = {
    fontFamily: "'Roboto', sans-serif",
    button: {
      textTransform: 'capitalize',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h1: {
      fontFamily: "'Lato', 'Roboto', sans-serif",
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 24,
      fontWeight: 400,
    },
    h4: {
      fontSize: 19,
      fontWeight: 400,
    },
    h5: {
      color: defaultTheme.palette.grey['500'],
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 2,
    },
    caption: {
      fontSize: 10,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  };

  const basicTheme = { palette, typography };

  // Adding the screen padding to the breakpoint size because we want the actual content size to be
  // the breakpoint size.
  const totalScreenPadding = defaultTheme.spacing(6);

  const breakpoints = {
    xs: 0,
    sm: 320 + totalScreenPadding,
    md: 720 + totalScreenPadding,
    lg: 1024 + totalScreenPadding,
    xl: 1280 + totalScreenPadding,
  };

  const output = createMuiTheme({
    ...basicTheme,
    breakpoints: {
      values: breakpoints,
    },
    overrides: makeThemeOverrides({ useDarkMode, breakpoints, ...basicTheme }),
  });

  return output;
};

// Helpers

interface Overrides extends CoreOverrides {
  MuiAutocomplete?:
    | Partial<
        Record<AutocompleteClassKey, CSSProperties | (() => CSSProperties)>
      >
    | undefined;
}

const makeThemeOverrides = ({
  breakpoints,
  palette,
}: {
  breakpoints: BreakpointValues;
  useDarkMode: boolean;
  palette: PaletteOptions;
  typography: TypographyOptions;
}): Overrides => ({
  MuiAutocomplete: {
    paper: {
      backgroundColor: palette.background?.default,
    },
  },
  MuiCard: {
    root: {
      backgroundColor: palette.background?.default,
      padding: `${defaultTheme.spacing(8)}px ${defaultTheme.spacing(6)}px`,
      boxShadow: '2px 2px 15px 0 #f0f4ff',

      [`@media (max-width:${breakpoints.lg - 0.05}px)`]: {
        padding: defaultTheme.spacing(3),
        paddingBottom: defaultTheme.spacing(8),
      },

      [`@media (max-width:${breakpoints.md - 0.05}px)`]: {
        padding: `${defaultTheme.spacing(4)}px ${defaultTheme.spacing(2)}px`,
      },
    },
  },
  MuiContainer: {
    root: {
      margin: '0px',
      padding: '0px',
    },
  },
  MuiDialog: {
    paper: {
      backgroundColor: palette.background?.default,
    },
  },
  MuiDivider: {
    root: {
      marginBottom: defaultTheme.spacing(2),
      marginTop: defaultTheme.spacing(2),
    },
  },
  MuiDrawer: {
    paper: {
      backgroundColor: palette.background?.default,
    },
  },
  MuiListItem: {
    button: {
      '&:hover': {
        backgroundColor:
          palette.action?.hover !== undefined
            ? opacify(100)(palette.action.hover)
            : undefined,
      },
    },
  },
  MuiPopover: {
    paper: {
      backgroundColor: palette.background?.default,
    },
  },
});
