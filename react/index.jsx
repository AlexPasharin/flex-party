import React from 'react'
import {render} from 'react-dom'
import Header from './Header'

const App = props => (
    <div className="main-container">
      <Header />
    </div>
)

render(
  <App />,
  document.getElementById('root')
)
