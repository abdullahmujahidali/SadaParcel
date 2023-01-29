const plugin = require('tailwindcss/plugin');

const breakpoints = require('./tokens/breakpoints.json');
const colors = require('./tokens/colors.json');
const fontSize = require('./tokens/typography.json');

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');
const {default: toColorValue} = require('tailwindcss/lib/util/toColorValue');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    screens: breakpoints,
    fontSize: Object.fromEntries(
        Object.entries(fontSize).map(([k, v]) => [k, [v.fontSize, {...v}]]),
    ),
  },
  plugins: [
    plugin(function({matchUtilities}) {
      matchUtilities({
        'counter': (value) => ({
          counterReset: value,
        }),
        'counter-inc': (value) => ({
          counterIncrement: value,
        }),
      });
    }),
    plugin(function({matchUtilities, addUtilities, theme, corePlugins}) {
      addUtilities({
        '.labeled-divider': {
          'display': 'flex',
          'alignItems': 'center',
          'textAlign': 'center',
          '--tw-labled-divider-gap-before': '.5em',
          '--tw-labled-divider-gap-after': '.5em',

          '&::before, &::after': {
            content: '\'\'',
            flex: '1',
          },

          '&::before': {
            marginRight: 'var(--tw-labled-divider-gap-before)',
          },
          '&::after': {
            marginLeft: 'var(--tw-labled-divider-gap-after)',
          },
        },
      });

      matchUtilities(
          {
            'labeled-divider': (value) => ({
              '&::before, &::after': {
                '@defaults border-width': {},
                'border-bottom-width': value,
              },
            }),
          },
          {values: theme('divideWidth'), type: ['line-width', 'length', 'any']},
      );

      matchUtilities(
          {
            'labeled-divider-gap': (value) => ({
              '--tw-labled-divider-gap-before': value,
              '--tw-labled-divider-gap-after': value,
            }),
          },
          {values: theme('space')},
      );

      matchUtilities(
          {
            'labeled-divider': (value) => ({
              '&::before, &::after': {
                borderColor: toColorValue(value),
              },
            }),
          },
          {
            values: (({DEFAULT: _, ...colors}) => colors)(
                flattenColorPalette(theme('divideColor')),
            ),
            type: ['color', 'any'],
          },
      );
    }),
  ],
};
