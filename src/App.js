import React, { useContext } from 'react';
import './App.css';
import DragDrop from './components/DragDrop';
import { store } from './store';

function App() {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  console.log(state);

  return (
    <div className="App">
      <h1>Drag and drop HTML API</h1>
      <DragDrop 
        data={state.drop}
        dispatch={dispatch}
      />
      <ul className='dropped-files'>
        {
          state.drop.fileList.map(file => <li key={file.name}>{file.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
