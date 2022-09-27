import React from 'react';

export const Radio = ({ id, pergunta, opcoes, onchange, valor, slide }) => {
  return (
    <>
      <fieldset>
        <legend>{pergunta}</legend>
        {opcoes.map((op, index) => {
          return (
            <label style={{ display: 'block' }} key={op} htmlFor="">
              <input
                type="radio"
                checked={valor === op}
                id={id}
                value={op}
                onChange={onchange}
              ></input>
              {op}
            </label>
          );
        })}
      </fieldset>
    </>
  );
};
