import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const createPatchFrom = (value) => PatchEvent.from(value === '' ? unset() : set(value));
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};
export default function CustomArrayInput({ type, value, onChange, onBlur, onFocus }) {
    // Your custom input handling logic goes here

    const handleChange = React.useCallback(
        // Handle change events
        (event) => {
            onChange(createPatchFrom(event.target.value));
        },
        [onChange]
    );
    const handleDragEnd = (result) => {
        // Dropped outside the list or same place
        if (!result.destination || result.destination.index === result.source.index) {
            return;
        }
        const items = reorder(
            value,
            result.source.index,
            result.destination.index
        );
        // Create a patch event to update the document's value based on the new order
        onChange(PatchEvent.from(set(items)));
    };




    return (
        <>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {value.map((item, index) => (
                                <Draggable key={item._key} draggableId={item._key} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            {/* Render your block content here */}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <div>
                {/* Your custom array input interface */}
                <input
                    type="text"
                    value={value || ''}
                    onChange={handleChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                />
            </div>
        </>
    );
}

