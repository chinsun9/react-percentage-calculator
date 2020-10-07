import React, { useState } from 'react';
import { useResultDispatch } from '../contexts/ResultContextProvider';

const initialStateValues: InputValue = {
  value1: '',
  value2: '',
};

export default function CalForm({ calFuntion: calFuntionSet }: CalFormProps) {
  const [values, setValues] = useState(initialStateValues);
  const dispatch = useResultDispatch();

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { value1, value2 } = values;
    const result = calFuntionSet.calfuntion(Number(value1), Number(value2));

    dispatch({
      type: 'CALCULATE',
      result: { isHide: false, value: result },
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { placeholder1, placeholder2, text1, text2 } = calFuntionSet.calInfo;

  return (
    <li>
      <form onSubmit={onsubmit}>
        <input
          placeholder={placeholder1}
          type="number"
          step="0.0000000000001"
          name="value1"
          onChange={onChange}
          required
        />
        <span>{text1}</span>
        <input
          placeholder={placeholder2}
          type="number"
          step="0.0000000000001"
          name="value2"
          onChange={onChange}
          required
        />
        <span>{text2}</span>
        <button type="submit" className="btn btn-outline-primary">
          계산
        </button>
      </form>
    </li>
  );
}
