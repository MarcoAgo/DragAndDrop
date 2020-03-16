/** 
 * manage an element that is entering a valid drop area
 */
export const handleDragEnter = (e, data, dispatch) => {
    e.preventDefault();
    e.stopPropagation();

    // enter in drop area, increase dropDepth of 1
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth + 1 })
}

/**
 * manage when an element is dropped out a valid drop area
 */ 
export const handleDragLeave = (e, data, dispatch) => {
    e.preventDefault();
    e.stopPropagation();

    // Leave drop area decrese dropDepth of 1
    dispatch({ type: 'SET_DROP_DEPTH', dropDepth: data.dropDepth - 1 })
    if (data.dropDepth > 0) return
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false})
}

/**
 * manage when an element is over a valid drag area
 */
export const handleDragOver = (e, dispatch) => {
    e.preventDefault();
    e.stopPropagation();

    // Copy dragged element
    e.dataTransfer.dropEffect = 'copy'

    // Set dropZone state to true
    dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: true })
}

/**
 * manage when an element is dropped in a valid drop area
 */
export const handleDrop = (e, data, dispatch) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files]

    if (files && files.length > 0) {
        const filesList = data.fileList.map(file => file.name)

        // filter files list
        files = files.filter(file => !filesList.includes(file.name))
        
        dispatch({ type: 'ADD_FILE_TO_LIST', files })

        // clear dataTransfer data
        e.dataTransfer.clearData()

        dispatch({ type: 'SET_DROP_DEPTH', dropDepth: 0 })
        dispatch({ type: 'SET_IN_DROP_ZONE', inDropZone: false })
    }
}