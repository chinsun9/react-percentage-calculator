import React from 'react';
import {
  useResultDispatch,
  useResultState,
} from '../contexts/ResultContextProvider';

export default function CalResult() {
  const result = useResultState();

  const dispatch = useResultDispatch();

  const onclick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    dispatch({
      type: 'INIT',
    });
  };

  return (
    <div className={`mb-4 result-box ${result.isHide ? 'hide' : ''}`}>
      <div>
        <span>
          <strong>{result.value}</strong>
        </span>
      </div>
      <div>
        <input onClick={onclick} type="button" value="초기화" />
      </div>
    </div>
  );
}
