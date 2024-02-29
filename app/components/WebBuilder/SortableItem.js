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

const Item = ({id, children}) => {
	const {isDragging, attributes, listeners, setNodeRef, transform, transition} =
		useSortable({id});
	if (isDragging)
		return (
			<div
				ref={setNodeRef}
				style={{
					transform: transform
						? `translate3d(${transform.x}px, ${transform.y}px, 0)`
						: undefined,
					transition,
					cursor: "grab",
					padding: "8px",
					border: "1px solid #ccc",
					borderRadius: "4px",
					margin: "4px",
					height: "200px",
					width: "100%",
				}}
				className=" border border-red-400 w-[200px] "
			>
				{children}
			</div>
		);

	return (
		<div
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			style={{
				transform: transform
					? `translate3d(${transform.x}px, ${transform.y}px, 0)`
					: undefined,
				transition,
				cursor: "grab",
				padding: "8px",
				border: "1px solid #ccc",
				borderRadius: "4px",
				margin: "4px",
				height: "200px",
			}}
		>
			{children}
		</div>
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
		console.log(e.active.id);
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
						<Item key={item} id={item}>
							{item}
						</Item>
					))}
				</div>
			</SortableContext>
			{/* {createPortal( */}
				<DragOverlay>
					{activeData && <Item id={activeData}>{activeData}</Item>}
				</DragOverlay>,
				{/*  document.body
			)} */}
		</DndContext>
	);
};

export default DragAndDropList;
