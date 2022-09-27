import React from "react";
import CpfInputFormat from "./CpfInputFormat";
import {
  Description,
  Primary,
  Title,
} from "@storybook/addon-docs/blocks";

export default {
  title: "Components/CpfInputFormat",
  component: CpfInputFormat,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Cpf Input Format</Title>
          <Description>
            Componente para formatação de número digitado para formato de CPF
          </Description>
          <Primary />
        </>
      ),
    },
  },
  argTypes: {
    cpf: {
        description: "CPF",
      },
      handleChangeCpfValue: {
        description: "Função de atualização do valor digitado"
      }
  }
};

const Template = (args) => <CpfInputFormat {...args} />;

export const Sample = Template.bind({});

