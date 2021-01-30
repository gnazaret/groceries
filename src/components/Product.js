import React from 'react';

export default function Product({ product }) {
	return (
		<div>
			{product.name}-{product.price}
		</div>
	);
}
