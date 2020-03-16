import React, { useReducer } from 'react';
import './App.css';
import DragDrop from './components/DragDrop';
import { drop } from './reducers/useReducers';

function App() {

  const data = { 
    dropDepth: 0,
    inDropZone: false,
    fileList: [] 
  }

  const [state, dispatch] = useReducer(drop, data);

  return (
    <div className="App">
      <h1>Drag and drop HTML API</h1>
      <DragDrop 
        data={state}
        dispatch={dispatch}
      />
      <ul className='dropped-files'>
        {
          state.fileList.map(file => <li key={file.name}>{file.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
