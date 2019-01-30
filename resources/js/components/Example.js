
    import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'

    class Example extends Component {
      render () {
        return (
          <BrowserRouter>
            <div>
              Helllo
            </div>
          </BrowserRouter>
        )
      }
    }

    ReactDOM.render(<Example />, document.getElementById('Example'))