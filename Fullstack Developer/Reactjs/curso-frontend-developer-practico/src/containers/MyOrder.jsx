import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
//imagenes
import Arrow from "@icons/flechita.svg"
import AppContext from '../context/AppContext';



const MyOrder = () => {
	
	const {state} = useContext(AppContext);
	const total = ()=>{
		const totalOrder = state.cart.reduce((accumulator, currentValue)=>{
			return accumulator + currentValue.price}
			,0)
		return totalOrder;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={Arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(item =>(<OrderItem product={item} key={`orderItem-${item.id}`}/>))
				}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${total()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;