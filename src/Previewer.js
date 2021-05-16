import React from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function Previewer (props) {

	return (
		// <div>
		// 	<textarea id="preview" name="preview" rows="10" cols="80" value={props.markdownText}></textarea>	
		// </div>

		<ReactMarkdown>{props.markdownText}</ReactMarkdown>
	);
}

export default Previewer;
