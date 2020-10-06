import React, { useState } from 'react';
import { CalResult } from './components/CalResult';
import { CalFunctionList } from './components/CalFunctionList';
import { SideTab } from './components/SideTab';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const initialResult: Result = { vlaue: 0, mode: 'hide' };

const initialCalFunctions: Array<CalFunctionSet> = [
  {
    calInfo: {
      placeholder1: '전체값 예)10000',
      placeholder2: '비율값 예)20',
      text1: '의',
      text2: '%는 얼마?',
    },
    calfuntion: (value1, value2) => {
      let suffix = '';
      const result = value1 * value2 * 0.01;
      return Number(result.toFixed(15)) + suffix;
    },
  },
  {
    calInfo: {
      placeholder1: '전체값 예)10000',
      placeholder2: '일부값 예)500',
      text1: '의',
      text2: '은 몇%',
    },
    calfuntion: (value1, value2) => {
      let suffix = '%';
      const result = (value2 / value1) * 100;
      return Number(result.toFixed(15)) + suffix;
    },
  },
  {
    calInfo: {
      placeholder1: '전체값 예)10000',
      placeholder2: '증감값 예)25000',
      text1: '이/가',
      text2: '으로 변하면?',
    },
    calfuntion: (value1, value2) => {
      let suffix = '%';
      const result = ((value2 - value1) / value1) * 100;

      return Number(result.toFixed(12)) + suffix;
    },
  },
  {
    calInfo: {
      placeholder1: '전체값 예)10000',
      placeholder2: '비율값 예)25',
      text1: '이/가',
      text2: '% 증가하면?',
    },
    calfuntion: (value1, value2) => {
      let suffix = '';
      const result = value1 + value1 * value2 * 0.01;
      return Number(result.toFixed(15)) + suffix;
    },
  },
];

const App: React.FC = () => {
  const [result, setResult] = useState(initialResult);

  const changeResult: SetResult = (newResult: number) => {
    setResult({ vlaue: newResult, mode: 'display' });
  };

  const hideResult = () => {
    setResult({ vlaue: 0, mode: 'hide' });
  };

  return (
    <React.Fragment>
      <div className="card container w-80 border border-primary rounded">
        <div className="card-header">
          <h1>퍼센트 계산기</h1>
        </div>

        <CalFunctionList
          calResult={changeResult}
          calFunctions={initialCalFunctions}
        ></CalFunctionList>

        <CalResult result={result} hideResult={hideResult}></CalResult>
      </div>

      <SideTab></SideTab>
    </React.Fragment>
  );
};

export default App;
