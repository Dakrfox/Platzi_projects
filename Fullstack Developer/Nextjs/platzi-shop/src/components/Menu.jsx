import React, { useState } from 'react';
import style from '@styles/Menu.module.scss';


const Menu = () => {
	
	return (
		<div className={style.Menu}>
			<ul>
				<li>
					<a href="/" className={style.title}>My orders</a>
				</li>
				<li>
					<a href="/">My account</a>
				</li>
				<li>
					<a href="/">Sign out</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
