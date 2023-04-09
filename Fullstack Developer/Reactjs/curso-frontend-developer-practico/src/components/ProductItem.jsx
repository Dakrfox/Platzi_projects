import React, {useState} from 'react';
import "@styles/ProductItem.scss"
//imagenes
import btnAdd from "@icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {
	const [cart, setCart] = useState('');

	const handleClick = () => {
		setCart('');
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick} >
					<img src={btnAdd} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;