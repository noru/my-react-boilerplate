import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Div from '../components/Div'

export class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="*" component={Div}/>
      </Router>
    )
  }
}

export default App