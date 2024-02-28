import {useState} from "react";
import {DndContext, useDroppable} from "@dnd-kit/core";
import {SortableContext} from "@dnd-kit/sortable";
import DragAndDropList from "./SortableItem";

const DroppableContainer = ({containerItem,seContainerItem}) => {
	const {setNodeRef, isOver} = useDroppable({
		id: "droppable",
		data: {
			dr: containerItem,
		},
	});

	const containerStyle = {
		backgroundColor: isOver ? "lightgray" : "white",
		minHeight: "200px",
		padding: "16px",
	};
	const onDragEnd = (e) => {
		console.log(e);
	};

	return (
		<div
			ref={setNodeRef}
			style={containerStyle}
			className=" w-full h-full bg-white"
		>
			<h2>Droppable Container</h2>
			<div className=" flex flex-col gap-5">
				{/* {containerItem.map((item) => (
					<button className=" bg-black mt-2 text-white">{item}</button>
				))} */}
        <DragAndDropList containerItem={containerItem} seContainerItem={seContainerItem} />
			</div>
		</div>
	);
};
export default DroppableContainer;
