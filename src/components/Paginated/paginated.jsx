import React from "react";
import Styles from './style.module.css'

export default function Paginated({ max, page, action }) {
	
	const list = []
	for (let i = 1; i <= Math.ceil(max / page); i++) {
		list.push(i)
	}

	return (
		<div className={Styles.div}>
			<ul className={Styles.ul}>
				{list.map((number, i) => <li key={i} onClick={() => action(number)}> {number} </li>)}
			</ul>
		</div>
	);
}
