// Drag and drop reducer
export const drop = (state = {}, action) => {
    switch (action.type) {
		/**
		 * Drop
		 * This will be an integer. 
		 * We’ll use it to keep track of how many levels deep we are in the drop zone. 
		 * Later on, I will explain this with an illustration.
		 */
        case 'SET_DROP_DEPTH':
			return { ...state, drop: { ...state.drop, dropDepth: action.dropDepth } }
		
		/**
		 * This will be a boolean. 
		 * We will use this to keep track of whether we’re inside the drop zone or not.
		 */
		case 'SET_IN_DROP_ZONE':
			return { ...state, drop: { ...state.drop, inDropZone: action.dropZone } }

		/**
		 * This will be a list. 
		 * We’ll use it to keep track of files that have been dropped into the drop zone
		 */	
		case 'ADD_FILE_TO_LIST':
			if (!action.files) {
				return state
			}

			return { 
				...state, 
				drop: { 
					...state.drop, 
					fileList: state.drop.fileList.concat(action.files)
				} 
			}

        default:
            return state
    }
}