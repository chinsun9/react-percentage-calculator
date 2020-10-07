import React from 'react';
import CalForm from './CalForm';

export default function CalFunctionList({
  calFunctions,
  calResult,
}: CalFunctionListProps) {
  return (
    <div className="mt-3 cal-box">
      <ul>
        {calFunctions.map((calFunction, index) => {
          return (
            <CalForm
              key={index}
              id={index}
              calResult={calResult}
              calFuntion={calFunction}
            />
          );
        })}
      </ul>
    </div>
  );
}
