import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type ResultDispatch = Dispatch<Action>;

const ResultStateContext = createContext<ResultState | undefined>(undefined);

const ResultDispatchContext = createContext<ResultDispatch | undefined>(
  undefined
);

function resultReducer(state: ResultState, action: Action): ResultState {
  switch (action.type) {
    case 'CALCULATE':
      console.log(`calc`);

      return action.result;
    case 'INIT':
      return { ...state, isHide: true };
    default:
      throw new Error('Unhandled action');
  }
}

const initialResultState: ResultState = {
  value: null,
  isHide: true,
};

export function ResultContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [result, dispatch] = useReducer(resultReducer, initialResultState);

  return (
    <>
      <ResultDispatchContext.Provider value={dispatch}>
        <ResultStateContext.Provider value={result}>
          {children}
        </ResultStateContext.Provider>
      </ResultDispatchContext.Provider>
    </>
  );
}

export function useResultState() {
  const state = useContext(ResultStateContext);
  if (!state) throw new Error('ResultProvider not found');
  return state;
}

export function useResultDispatch() {
  const dispatch = useContext(ResultDispatchContext);
  if (!dispatch) throw new Error('ResultProvider not found');
  return dispatch;
}
