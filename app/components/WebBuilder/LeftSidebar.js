'use client'
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import {CSS} from "@dnd-kit/utilities";

function LeftSidebar({dr}) {
	const {setNodeRef, listeners, attributes, transform,transition} = useDraggable({
		id: dr,
		data: {
			dr,
		},
	});
	const style = {
		transform: CSS.Translate.toString(transform),
		transition
	};
	return (
		<div
			style={style}
			className=" draggable-item w-72 h-20  mt-3 "
			ref={setNodeRef}
			{...attributes}
      {...listeners}
		>
			{dr}
		</div>
	);
}

export default LeftSidebar;
