import React from 'react';
import style from'@styles/Order.module.scss';

const Order = () => {
	return (
		<div className={style.Order}>
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}

export default Order;
