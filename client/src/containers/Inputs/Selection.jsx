import React from "react";

export default function Selection({ id, options, text }) {
	return (
		<>
			<label htmlFor={id}>{text}</label>
			<select id={id}>
				{options.map((e, i) => (
					<option key={i} value={e.value}>
						{e.value}
					</option>
				))}
			</select>
		</>
	);
}
