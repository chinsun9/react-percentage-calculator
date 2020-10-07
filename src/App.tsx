import React from 'react';
import CalResult from './components/CalResult';
import SideTab from './components/SideTab';
import CalFunctionList from './components/CalFunctionList';
import { ResultContextProvider } from './contexts/ResultContextProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <ResultContextProvider>
      <div className="card container w-80 border border-primary rounded">
        <div className="card-header">
          <h1>퍼센트 계산기</h1>
        </div>

        <CalFunctionList></CalFunctionList>

        <CalResult></CalResult>
      </div>

      <SideTab></SideTab>
    </ResultContextProvider>
  );
}

export default App;
