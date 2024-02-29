"use client";
import {SortableContext, arrayMove, useSortable} from "@dnd-kit/sortable";
import {
	DndContext,
	DragOverlay,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import {useState} from "react";
import {createPortal} from "react-dom";
import Card from "./Card";
import Button from "./Button";
import { CSS } from "@dnd-kit/utilities";

const Item = ({id, children}) => {
	const {isDragging, attributes, listeners, setNodeRef, transform, transition} =
		useSortable({
			id,
			data: children,
		});
		const style = {
			transform:CSS.Transform.toString(transform),
			transition,
			cursor: "grab",
			borderRadius: "4px",
			margin: "4px",
		  };
	if (isDragging)
		return (
			<div
				ref={setNodeRef}
				style={style}
				className=" border border-red-400  "
			>
				{children.type == "card" && <Card id={children.id} text={children} />}
				{children.type == "button" && <Button id={children.id} text={children} />}{" "}
			</div>
		);
	
		

	return (
		<div
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={style}

		>
                   {children.type == "card" && <Card id={children.id} text={children} />}
				{children.type == "button" && <Button id={children.id} text={children} />}{" "}		</div>
	);
};

const DragAndDropList = ({containerItem, setContainerItem}) => {
	function handleDragEnd(event) {
		const {active, over} = event;
		console.log(active, over);
		if (active.id !== over.id) {
			setContainerItem((items) => {
				const oldIndex = items.indexOf(active.id);
				const newIndex = items.indexOf(over.id);

				return arrayMove(items, oldIndex, newIndex);
			});
		}
	}
	const [activeData, setActiveData] = useState(null);
	const dragStart = (e) => {
		setActiveData(e.active.id);
	};
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 60,
			},
		})
	);
	return (
		<DndContext
			sensors={sensors}
			onDragStart={dragStart}
			onDragEnd={handleDragEnd}
		>
			<SortableContext items={containerItem}>
				<div>
					{containerItem.map((item, index) => (
						<Item key={item.id} id={item.id}>
							{item}
						</Item>
					))}
				</div>
			</SortableContext>
			{/* {createPortal( */}
			<DragOverlay>
				{activeData && <Item id={activeData.id}>{activeData}</Item>}
			</DragOverlay>
			,
			{/*  document.body
			)} */}
		</DndContext>
	);
};

export default DragAndDropList;
