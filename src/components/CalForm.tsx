import React, { FormEvent, useState } from 'react';

const initialStateValues: InputValue = {
  value1: '',
  value2: '',
};

export const CalForm: React.FC<CalFormProps> = ({
  id,
  calResult,
  calFuntion,
}) => {
  const [values, setvalues] = useState(initialStateValues);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { value1, value2 } = values;

    if (value1.length === 0 || value2.length === 0) {
      console.log('비어있음');
      return;
    }
    const result = calFuntion.calfuntion(parseInt(value1), parseInt(value2));
    calResult(result);
  };

  const changeValue1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalues({ value1: e.target.value, value2: values.value2 });
  };
  const changeValue2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalues({ value1: values.value1, value2: e.target.value });
  };

  return (
    <li>
      <input
        placeholder={calFuntion.calInfo.placeholder1}
        type="number"
        onChange={changeValue1}
      />
      <span>{calFuntion.calInfo.text1}</span>
      <input
        placeholder={calFuntion.calInfo.placeholder2}
        type="number"
        onChange={changeValue2}
      />
      <span>{calFuntion.calInfo.text2}</span>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={handleSubmit}
      >
        계산
      </button>
    </li>
  );
};
