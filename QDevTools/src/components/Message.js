import React from 'react';

const Message = ({ content }) => {
	return (<div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '10px'}}>
		<div>{content.id}</div>
		<div>{content.payload.text}</div>
		<div>{content.payload.priority}</div>
	</div>)
}

export default Message;