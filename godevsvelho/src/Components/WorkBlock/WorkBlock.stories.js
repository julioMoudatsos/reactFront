import React from "react";
import WorkBlock from "./WorkBlock";
import {
  Description,
  Primary,
  Title,
  PRIMARY_STORY,
  ArgsTable,
} from "@storybook/addon-docs/blocks";

export default {
  title: "Components/WorkBlock",
  component: WorkBlock,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Work Block</Title>
          <Description>Bloco onde será armazenado as informações dos trabalhos 
            registrados para que os Devs consigam visualizar</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
  argTypes: {
    titulo: {
      description: "Título",
      defaultValue: "Título do Card",
      control: { type: "text" },
    },
    categoria: {
      description: "Categoria do trabalho ex: `React` `Angular` `Java`",
      defaultValue: "Java",
      control: { type: "text" },
    },
    contratante: {
      description: "Contratante do Trabalho",
      defaultValue: "Caio Hideki",
      control: { type: "text" },
    },
    data: {
      description: "Data de entrega",
      defaultValue: 1663383600000,
      control: { type: "date" },
    },
    valor: {
      description: "Valor do Trabalho",
      defaultValue: 2000,
      control: { type: "number" },
    },
    descricao: {
      description:
        "Área onde será exibida uma pequena descrição desse trabalho para despertar atenção do desenvolvedor, que clickando em ver mais terá informações completas",
      defaultValue:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      control: { type: "text" },
    },
  },
};

const Template = (args) => <WorkBlock {...args} />;

export const Sample = Template.bind({});


