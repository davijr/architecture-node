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
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true
      }
    ]
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@models': './src/models',
        '@routes': './src/routes',
        '@services': './src/services'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
