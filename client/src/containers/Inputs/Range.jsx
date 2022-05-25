import React, { useState } from "react";

export default function Range({ id, min, max, action }) {
  let [value, setValue] = useState(0)
  const change = function(e) {
    console.log(min, max);
    console.log(e.target.value);    
    setValue(e.target.value)
  }

	return (
		<>
			<input id={id} type={"range"} min={min} max={max} onChange={(e) => {change(e)}}/>
      <span>{value}</span>
		</>
	);
}
