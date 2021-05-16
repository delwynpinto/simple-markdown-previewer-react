import React from 'react';
import './App.css';

function Editor (props) {

	return (
		<div>
			<textarea id="editor" onChange={props.updateMarkdownText} name="editor" rows="4" cols="50" value={props.markdownText}></textarea>	
		</div>	
		
	);
}

export default Editor;
