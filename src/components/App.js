import React, { useState } from 'react';
import productData from '../data';
import Product from './Product';
export default function App(props) {
	const [newProduct, setNewProduct] = useState({
		name: '',
		brand: '',
		units: '',
		quantity: 0,
		isPurchased: false
	});
	const [productList, setProductList] = useState([productData]);
	const addProduct = event => {
		event.preventDefault();
		setProductList([...productList, newProduct]);
		setNewProduct({
			name: '',
			brand: '',
			units: '',
			quantity: 0,
			isPurchased: false
		});
	};
	const handleChange = event => {
		setNewProduct({
			...newProduct,
			[event.target.id]: event.target.value
		});
	};
	return (
		<div className="Page-wrapper">
			<div>
				{productData.map(product => {
					return <Product product={product} />;
				})}
			</div>
			<form onSubmit={addProduct}>
				<label htmlFor="name">Name: </label>
				<input
					id="name"
					type="text"
					value={newProduct.name}
					onChange={handleChange}
				></input>
				<br />
				<label htmlFor="brand">Brand: </label>
				<input
					id="brand"
					type="text"
					value={newProduct.brand}
					onChange={handleChange}
				></input>
				<br />
				<label htmlFor="unit">Unit Type: </label>
				<input
					id="units"
					type="text"
					value={newProduct.units}
					onChange={handleChange}
				></input>
				<br />
				<label htmlFor="quantity">Available Units: </label>
				<input
					id="quantity"
					type="number"
					value={newProduct.quantity}
					onChange={handleChange}
				></input>
				<br />
				<input type="submit" value="Add Product"></input>
			</form>
			<ul className="list">
				{productList.length
					? productList.map((listItem, i) => {
							return (
								<li key={`${listItem.item}`}>
									Name:{listItem.name}
									<br />
									Brand:{listItem.brand}
									<br />
									Units:{listItem.units}
									<br />
									Quantity:{listItem.quantity}
								</li>
							);
					  })
					: ''}
			</ul>
		</div>
	);
}

// import React, { useState } from 'react';
// import productData from '../data';
// import Product from './Product';
// export default function App(props) {
// 	const [products, setProducts] = useState(productData);
// 	const [toner, addToner] = useState({
// 		name: '',
// 		brand: '',
// 		units: '',
// 		quantity: '',
// 		isPurchased: Boolean
// 	});
// 	const [screen, updateScreen] = useState([]);
// 	const handleSubmit = event => {
// 		event.preventDefault();
// 		updateScreen(
// 			`${toner.name} ${toner.brand} ${toner.units} ${toner.quantity}`
// 		);
// 		addToner({
// 			name: '',
// 			brand: '',
// 			units: '',
// 			quantity: ''
// 		});
// 	};
// 	const handleChange = event => {
// 		event.preventDefault();
// 		addToner({
// 			...toner,
// 			...{ [event.target.id]: event.target.value }
// 		});
// 	};
// 	return (
// 		<div>
// 			<h1>Toner and Ink List</h1>
// 			<div className={'Page-wrapper'}>
// 				<form onSubmit={handleSubmit}>

// 					<label htmlFor="name">Name: </label>
// 					<input id="name" value={toner.name} onChange={handleChange}></input>
// 					<br />
// 					<label htmlFor="brand">Brand: </label>
// 					<input id="brand" value={toner.brand} onChange={handleChange}></input>
// 					<br />
// 					<label htmlFor="unit">Unit Type: </label>
// 					<input id="units" value={toner.units} onChange={handleChange}></input>
// 					<br />
// 					<label htmlFor="quantity">Available Units: </label>
// 					<input
// 						id="quantity"
// 						value={toner.quantity}
// 						onChange={handleChange}
// 					></input>
// 					{/* <input
// 						id="isPurchased"
// 						value={toner.isPurchased}
// 						onChange={handleChange}
// 					></input> */}
// 					<input type="submit" value="New Toner Received"></input>
// 				</form>
// <div class={'Page-wrapper'}>
// {products.map(() => (
// 	<Product data={{ name: '', brand: '', units: '', quantity: '' }} />
// 	))}
// </div>

// {products.map(product => {
// 	return (
// 		<Product
// 			product={{
// 				name: product.name,
// 				brand: product.brand,
// 				units: product.units,
// 				quantity: product.quantity
// 			}}
// 		/>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }
