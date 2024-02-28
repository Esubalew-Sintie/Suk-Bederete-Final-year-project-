import { useSortable } from '@dnd-kit/sortable';
import { DndContext } from '@dnd-kit/core';

const Item = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition,
        cursor: 'grab',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        margin: '4px',
      }}
    >
      {children}
    </div>
  );
};

const DragAndDropList = ({containerItem,seContainerItem}) => {
    function handleDragEnd(event) {
        const { active, over } = event;
        
        if (active.id !== over.id) {
            seContainerItem((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
            
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        {containerItem.map((item, index) => (
          <Item key={item} id={item}>
            {item}
          </Item>
        ))}
      </div>
    </DndContext>
  );
};

export default DragAndDropList;