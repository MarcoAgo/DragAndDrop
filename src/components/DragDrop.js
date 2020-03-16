import React from 'react';
import {
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
} from '../helpers/helpers';

const DragDrop = (props) => {
    const { data, dispatch } = props;

    return (
        <div 
            className={data.inDropZone ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'}
            onDragEnter={e => handleDragEnter(e, data, dispatch)}
            onDragLeave={e => handleDragLeave(e, data, dispatch)}
            onDragOver={e => handleDragOver(e, dispatch)}
            onDrop={e => handleDrop(e, data, dispatch)}
        >
            <p>Drag files here to upload</p>
        </div>
    );
};

export default DragDrop;