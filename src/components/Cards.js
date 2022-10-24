import React from 'react';
import './Cards.css';


const Cards = ({text,itemId, handleDelete}) => {

	// const handleDelete = () => {
	// 	setDeleteItem(itemId);
	// 	console.log(itemId);
	// }

	return (
		<div className="card">
			<h1>{text}</h1>
			<span>{`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</span>
			<button type="button" onClick={()=>handleDelete(itemId)}>delete</button>
		</div>
	)
}

export default Cards;