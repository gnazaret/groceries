import React from 'react';

export default function Product({ product }) {
	const update = event => {
		updateToner({
			...product,
			...{ [event.target.id]: event.target.value }
		});
	};
	return (
		<div>
			Name : {product.name}
			<br />
			Brand : {product.brand}
			<br />
			Unit Type : {product.units}
			<br />
			Available Units : {product.quantity}
			<br />
			{product.isPurchased}
			<input
				type="submit"
				value="Update Toner"
				className={'button'}
				onChange={update}
			></input>
		</div>
	);
}
