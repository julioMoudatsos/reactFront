import InputMask from 'react-input-mask';
import * as React from 'react';
import { TextField } from "@mui/material";

const CpfInputFormat = ({ handleChangeCpfValue, cpf }) => {
  return (
    <InputMask
      mask="999.999.999-99"
      value={cpf}
      maskChar=""
      onChange={handleChangeCpfValue}
    >
      {() => (
        <TextField
          label={"CPF"}
          id="outlined-basic"
          fullWidth
          variant="outlined"
          size="small"
        />
      )}
    </InputMask>
  );
};

export default CpfInputFormat;
