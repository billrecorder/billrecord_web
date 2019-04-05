module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'modules': false,
        'targets': {
          'browsers': ['> 1%', 'last 2 versions', 'ie >= 11'],
        },
        'useBuiltIns': 'usage',
        'corejs': '2.x',
      },
    ],
    '@vue/babel-preset-jsx',
  ],
  plugins: [
    '@vue/babel-plugin-transform-vue-jsx',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
  ],
}
