module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@model': './src/model',
        '@routes': './src/routes',
        '@service': './src/service'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
