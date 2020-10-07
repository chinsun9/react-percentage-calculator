type Result = {
  vlaue: number;
  mode: string;
};

type SetResult = (newResult: number) => void;

type CalInfo = {
  placeholder1: string;
  placeholder2: string;
  text1: string;
  text2: string;
};

type CalFunction = (value1: number, value2: number) => Any;

type CalFunctionSet = {
  calInfo: CalInfo;
  calfuntion: CalFunction;
};

type InputValue = {
  value1: string;
  value2: string;
};

// Props

type CalFormProps = {
  id: number;
  calResult: SetResult;
  calFuntion: CalFunctionSet;
};

type CalResultProps = {
  result: Result;
  hideResult: any;
};

type CalFunctionsProps = {
  calFunctions: Array<CalFunctionSet>;
  calResult: SetResult;
};

type CalFunctionListProps = {
  calFunctions: Array<CalFunctionSet>;
  calResult: SetResult;
};
