type ResultState = {
  value: number | null;
  isHide: boolean;
};

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
  calFuntion: CalFunctionSet;
};

// Context

type Action = { type: 'CALCULATE'; result: ResultState } | { type: 'INIT' };
