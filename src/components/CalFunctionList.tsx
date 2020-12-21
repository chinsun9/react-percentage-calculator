import CalForm from './CalForm';
import React from 'react';
// import * as math from 'mathjs';
import { create, all } from 'mathjs';

const mathF = create(all, { number: 'Fraction' }) as math.MathJsStatic;

const mathjsCalc = (expr: string) => {
  return mathF.number(mathF.evaluate(expr));
};

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
      const result = mathjsCalc(`${value1} * ${value2} * 0.01`);
      return result + suffix;
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
      const result = mathjsCalc(`(${value2} / ${value1}) * 100`);
      return result + suffix;
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
      const result = mathjsCalc(`((${value2} - ${value1}) / ${value1}) * 100`);
      const gap = Math.abs(value2 - value1);
      let suffix = `% (두 값의 차이 ${gap})`;

      return result + suffix;
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
      const result = mathjsCalc(`${value1} + ${value1} * ${value2} * 0.01`);
      return result + suffix;
    },
  },
];

export default function CalFunctionList() {
  return (
    <div className="mt-3 cal-box">
      <ul>
        {initialCalFunctions.map((calFunction, index) => {
          return <CalForm key={index} calFuntion={calFunction} />;
        })}
      </ul>
    </div>
  );
}
