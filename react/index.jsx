import React from 'react'
import {render} from 'react-dom'
import Header from './Header.jsx'

const App = props => (
    <div className="container">
      <Header />
    </div>
)

render(
  <App />,
  document.getElementById('root')
)
