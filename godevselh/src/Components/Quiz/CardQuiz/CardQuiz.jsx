import React from 'react';
import Typography from "@mui/material/Typography";
import '../quiz.scss';
export const CardQuiz = ({ nome, topicos, cor, id }) => {
  return (
    <div onClick={()=> window.location= `/dev/dev-quizcurso/${id}`} className="cardquiz">
      <Typography style={{ backgroundColor: cor }}>{nome}</Typography>
      <Typography>Avaliação de: {nome}</Typography>
      <Typography>
        Tópicos: <b>{topicos}</b>
      </Typography>
    </div>
  );
};
