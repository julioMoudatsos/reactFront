import React from "react";
import WorkBlockHistoryDev from "./WorkBlockHistoryDev";
import {
  Description,
  Primary,
  Title,
} from "@storybook/addon-docs/blocks";

export default {
  title: "Components/WorkBlockHistoryDev",
  component: WorkBlockHistoryDev,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Work Block History Dev</Title>
          <Description>
            Bloco de Hitorico para visualização do dev de seus trabalhos em atividade e/ou finalizados, recebe um array com todas informações do
            item.
          </Description>
          <Primary />
        </>
      ),
    },
  },
};

const item = {
  aprovado: true,
  categoria: "React",
  contratante: {
    contratante_id: 5,
    cpfCNPJ: "123123123",
    email: "cainho",
    nome: "Caio Hideki",
  },
  data_inicio: null,
  data_limite: "2022-09-22T03:00:00.000+00:00",
  descricao: "Gostaria de reestruturar um site já existente em HTML/CSS",
  disponivel: false,
  finalizado: true,
  id_work: 1,
  titulo: "Projeto Elevate",
  valor: 123123,
};

const Template = (args) => <WorkBlockHistoryDev item={item} />;

export const Sample = Template.bind({});
