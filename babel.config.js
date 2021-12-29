const plugins = []
const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  ['@babel/preset-react'],
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(['react-refresh/babel'])
}

module.exports = {
  presets,
  plugins,
};
