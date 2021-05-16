import React from 'react';
import './App.css';

import Editor from './Editor'
import Previewer from './Previewer'
import Toolbar from './Toolbar'

class App extends React.Component {

	state = {
		markdownText : "Random Text"
	}

	updateMarkdownText(event) {
		this.setState({
			markdownText : event.target.value
		})
	}

	render() {
		return (   
			<div className="backdrop">
				<div className="editor-container">
					<Editor markdownText={this.state.markdownText} updateMarkdownText={this.updateMarkdownText.bind(this)}/>
				</div>
				<div className="preview-container">
					<div className="previwer-area">
						<Previewer markdownText={this.state.markdownText}/>
					</div>
					
				</div>
			</div>
		);
	}  
}

export default App;
