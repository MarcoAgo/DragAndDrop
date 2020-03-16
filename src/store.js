import React, { useReducer, createContext } from 'react';
import stateTree from './stateTree/tree';
import { drop } from './reducers/reducers';

const initialState = { ...stateTree };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(drop, initialState)
	
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
