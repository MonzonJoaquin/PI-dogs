import React from "react";

export default function Paginated({max, index, action}) {

  const list = []
  for (let i = 0; i < max; i++) {
    list.push(i)
  }

	return (
		<div>
      <button onClick={(e) => index?action(index-1):null}>-1</button>
			<ul key={"paginated"}>
				{list.slice(index, index+8).map((e,i) =>
        <span key={i} onClick={(e) => action(Number(e.target.innerText))}> {e} </span>
        )}
			</ul>
      <button onClick={(e) => action(index+1)}>+1</button>
		</div>
	);
}
