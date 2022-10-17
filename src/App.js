import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';
import NewList from './components/NewList';
import InProgressList from './components/InProgressList';
import CompletedList from './components/CompletedList';
import NewActionInput from './components/NewActionInput';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <h1>Todolist using Recoil</h1>
        </header>
        <NewActionInput/>
        <div className='content'>
          <NewList/>
          <InProgressList/>
          <CompletedList/>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
