module.exports = {
  plugins: ['@babel/plugin-proposal-class-properties'],
  presets: [
    '@babel/preset-typescript',
    '@babel/preset-react',
    'babel-preset-vite',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
