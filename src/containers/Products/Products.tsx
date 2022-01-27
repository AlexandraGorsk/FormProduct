import React, { useReducer, useState } from 'react';
import Form from '../../components/Form';
import { Container, Dialog, Button } from '@mui/material';
import { Product } from './Product.types';
import ProductPage from '../../components/ProductPage';

const Products: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [open, toggle] = useReducer((prev) => !prev, false);
	const addNewProduct = (data: Product) => {
		setProducts([...products, data]);
		toggle();
	};
	const productList = products.map((item) => (
		<ProductPage key={item.title} product={item} />
	));
	return (
		<Container maxWidth='xl'>
			<Button variant='outlined' color='secondary' onClick={toggle}>
				Open form
			</Button>
			<Dialog open={open} onClose={toggle} fullWidth>
				<Form onSubmit={addNewProduct} />
			</Dialog>
			{productList}
		</Container>
	);
};

export default Products;
