const config = {
  use: {
    baseURL: 'http://localhost:3000'
  },
  expect: {
    toMatchSnapshot: { threshold: 0.2 },
  },
}

module.exports = config
