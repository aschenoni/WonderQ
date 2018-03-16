import React from 'react';
import Message from './Message';

const ListBox = (props) => {
	return (<div className="list-box">
		<div className="list-box-header">{props.header}
	</div>
		<div className="list-box-body">
			<div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '10px', paddingBottom: '10px'}}>
				<div>ID</div>
				<div>Message</div>
				<div>Priority</div>
			</div>
			{props.items.map((item, index)=><Message key={index} content={item}/>)}
		</div>
	</div>);
}

export default ListBox; //TODO Connect to redux