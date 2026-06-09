module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-transform-react-jsx-location',
      {
        attributeName: 'data-source',
      },
    ],
  ],
};
