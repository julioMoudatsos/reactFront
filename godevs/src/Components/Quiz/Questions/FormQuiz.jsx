import { Radio } from '../../Quiz/Questions/Radio';
import React from 'react';
import { Link } from 'react-router-dom';

export const FormQuiz = () => {
  const perguntas = [
    {
      id: 'p1',
      pergunta:
        'Como você chama um componente React que captura erros de JavaScript em qualquer lugar na árvore do componente filho?',
      opcoes: [
        'Error bosses',
        'Error Helpers',
        'Error catchers',
        'Error boundaries',
      ],
      resposta: 'Error catchers',
    },
    {
      id: 'p2',
      pergunta:
        'Como você modificaria o construtor para corrigir este erro: "ReferenceError: deve chamar o superconstrutor na classe derivada antes de acessar this…? class TransIsBeautiful extends React.Component { constructor(props){ // Linha ausente console.log(this) ',
      opcoes: ['this.super()', 'super(this)', 'render(propds)', 'super(props)'],
      resposta: 'this.super()',
    },
    {
      id: 'p3',
      pergunta:
        'Como se chama esse padrão ? - const [count, setCount] = useState(0);',
      opcoes: [
        'code pushing',
        'object destruturing',
        'spread operating',
        'array destructuring',
      ],
      resposta: 'array destructuring',
    },
    {
      id: 'p4',
      pergunta:
        'De acordo com o código a seguir, quando o componente Hello é exibido ? - const greeting = isLoggedIn ? <Hello /> : null;',
      opcoes: [
        'quando a função Hello é chamada',
        'nunca',
        'quando é true isLoggedIn',
        'quando é false isLoggedIn',
      ],
      resposta: 'nunca',
    },
  ];
  const [respostas, setResposta] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [acerto, setAcerto] = React.useState('');
  function mudanca({ target }) {
    setResposta({ ...respostas, [target.id]: target.value });
  }
  function responder() {
    if (slide >= perguntas.length - 1) {
      setSlide(slide + 1);
      acertos();
    } else {
      setSlide(slide + 1);
    }
  }

  function voltar() {
    if (slide > 0) {
      setSlide(slide - 1);
    }
  }

  function acertos() {
    const resposta = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setAcerto(resposta.length);
  }
  
  return (
    <>
      <form
        className="formularioQuiz"
        onSubmit={(event) => event.preventDefault()}
        style={{ padding: '100px', display: 'flex', flexDirection: 'column' }}
      >
        {perguntas.map((p, index) => {
          if (slide !== index) return null;
          return (
            <Radio
              slide={slide}
              key={p.id}
              {...p}
              onchange={mudanca}
              valor={respostas[p.id]}
            />
          );
        })}
        <div>
          <button
            onClick={voltar}
            disabled={slide !== perguntas.length + 1 ? true : false}
          >
            {slide < perguntas.length ? 'Voltar' : ''}
          </button>
          <button onClick={responder}>Responder</button>
        </div>
      </form>

      {slide < perguntas.length ? (
        ''
      ) : (
        <p className="point">
          Você acertou: {acerto} de {perguntas.length}
          <Link to={'/dev-quiz'}>Voltar</Link>
        </p>
      )}
    </>
  );
};
