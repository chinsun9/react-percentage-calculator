import React from 'react';
import { CalForm } from './CalForm';

export const CalFunctionList: React.FC<CalFunctionsProps> = ({
  calFunctions,
  calResult,
}) => {
  return (
    <div className="row mt-3">
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
};
