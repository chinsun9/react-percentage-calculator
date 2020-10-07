import React from 'react';

export default function CalResult({ result, hideResult }: CalResultProps) {
  const onclick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    hideResult();
  };

  return (
    <div className="row mb-4">
      <div className={result.mode === 'hide' ? 'hide' : undefined}>
        <div>
          <span>
            <strong>{result.vlaue}</strong>
          </span>
        </div>
        <div>
          <input onClick={onclick} type="button" value="초기화" />
        </div>
      </div>
    </div>
  );
}
