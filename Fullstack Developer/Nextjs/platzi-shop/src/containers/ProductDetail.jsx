import React from 'react';
import ProductInfo from '@components/ProductInfo';
import style from '@styles/ProductDetail.module.scss';
import close from '@icons/icon_close.png'

const ProductDetail = () => {
	return (
		<aside className={style.ProductDetail}>
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;
