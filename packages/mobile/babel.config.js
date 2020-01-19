module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: 'inline',
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.js', '.ts', '.tsx', '.css'],
        root: ['./src']
      }
    ]
  ]
};
