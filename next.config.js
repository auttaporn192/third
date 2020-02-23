const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')


const plugins = [
  withSass({
    webpack: (config, { isServer }) => {
      if (isServer) {
        const antStyles = /antd\/.*?\/style\/css.*?/
        const origExternals = [...config.externals]
        config.externals = [
          (context, request, callback) => {
            if (request.match(antStyles)) return callback()
            if (typeof origExternals[0] === 'function') {
              origExternals[0](context, request, callback)
            } else {
              callback()
            }
          },
          ...(typeof origExternals[0] === 'function' ? [] : origExternals)
        ]

        config.module.rules.unshift({
          test: antStyles,
          use: 'null-loader'
        })
      }
      return config
    }
  })
]

const nextConfig = {
  env: {
    API_URL: 'https://jsonplaceholder.typicode.com'
  }
}

module.exports = withPlugins(plugins, nextConfig)
