import React from "react";

export default function Paginated({max, page, action}) {

  const list = []
  for (let i = 1; i < max/page; i++) {
    list.push(i)
  }

	return (
		<div>
			<ul>
				{list.map((number,i) => <span key={i} onClick={() => action(number)}> {number} </span>)}
			</ul>
		</div>
	);
}
