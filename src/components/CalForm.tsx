import React, { FormEvent, useState } from 'react';

const initialStateValues: InputValue = {
  value1: '',
  value2: '',
};

export default function CalForm({ id, calResult, calFuntion }: CalFormProps) {
  const [values, setvalues] = useState(initialStateValues);

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { value1, value2 } = values;

    if (value1.length === 0 || value2.length === 0) {
      console.log('비어있음');
      return;
    }
    const result = calFuntion.calfuntion(Number(value1), Number(value2));
    calResult(result);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalues({ ...values, [name]: value });
  };

  return (
    <li>
      <input
        placeholder={calFuntion.calInfo.placeholder1}
        type="number"
        name="value1"
        onChange={onChange}
      />
      <span>{calFuntion.calInfo.text1}</span>
      <input
        placeholder={calFuntion.calInfo.placeholder2}
        type="number"
        name="value2"
        onChange={onChange}
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
}
