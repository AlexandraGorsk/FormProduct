import { Product } from '../../containers/Products/Product.types';
export interface FormValues extends Product {}
export interface FormProps {
	initial?: FormValues;
	onSubmit: (data: Product) => void;
}
