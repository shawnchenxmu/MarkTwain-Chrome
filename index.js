import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Editor from './src/components/editor'

import './style/main.scss'

class App extends Component {
	render() {
		return (
			<Editor />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))