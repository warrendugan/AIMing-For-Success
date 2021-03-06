const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./store')
const { App } = require('./app')
const { loadUsers } = require('./actions')

render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)

store.dispatch(loadUsers())
