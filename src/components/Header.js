import React from 'react'

const Header = ({ setSearch }) => {

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		
	}

	return (
		<div className="header">
			<form onSubmit={handleSearchSubmit}>
				<input type="text" onChange={(e) => { setSearch(e.target.value) }} placeholder="search..." />
			</form>
		</div>
	)
}

export default Header