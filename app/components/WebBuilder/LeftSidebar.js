'use client'
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import {CSS} from "@dnd-kit/utilities";
import Card from "./Card";
import Button from "./Button";

function LeftSidebar({dr}) {
	const {setNodeRef, listeners, attributes, transform,transition} = useDraggable({
		id: dr.id,
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
			{
				dr.type=="card" && <button  >{dr.text}</button>
			}
			{
				dr.type=="button" && <button>{dr.text}</button>
			}
		</div>
	);
}

export default LeftSidebar;
