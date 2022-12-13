import React from 'react';
import investigation from '../imgs/investigation.png';
import CatBlock from '../CatBlock/CatBlock';

export const Categorias = () => {
  return (
    <section className="categoria">
      <h1 className="titulo">Categorias</h1>
      <div className="containerGrid">
        <div>
          <p>
            Você pode melhorar a qualidade de suas entregas de graça com a
            gente! Basta participar dos Quiz onde você aprende sobre todas as
            funcionalidades que um verdadeiro desenvolvedor deveria .
          </p>
          <img src={investigation} alt="investigation" />
        </div>
        <div>
          <div className="cardCont">
            <CatBlock type='Css'
             name='FrontEnd'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock>
            <CatBlock type='Ux'
             name='Design'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock>
            <CatBlock type='Js'
             name='Backend'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock>
            <CatBlock type='DevOPs'
             name='Backend'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock>    
            <CatBlock type='Sql'
             name='DataBases'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock>    
            <CatBlock type='Java'
             name='Backend'
             descricao='Quase 85% dos nossos serviços pedem conhecimentos relacionados
                ao Backend'>
            </CatBlock> 
          </div>
        </div>
      </div>
    </section>
  );
};
