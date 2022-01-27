import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductPageValues } from './ProductPage.types';

const ProductPage: React.FC<ProductPageValues> = ({ product }) => {
	const [extend, setExtend] = React.useReducer((prev) => !prev, false);

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{product.title}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{product.shortDescription}
				</Typography>
				{extend && <Typography>{product.description}</Typography>}
			</CardContent>
			<CardActions>
				<Button size='small'>Delete</Button>
				<Button size='small' onClick={setExtend}>
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
};

export default ProductPage;
