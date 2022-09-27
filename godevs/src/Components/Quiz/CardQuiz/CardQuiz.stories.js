import React from "react";
import { CardQuiz } from "./CardQuiz";
import {
  Description,
  Primary,
  Title,
  PRIMARY_STORY,
  ArgsTable,
} from "@storybook/addon-docs/blocks";

export default {
  title: "Components/CardQuiz",
  component: CardQuiz,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>CardQuiz</Title>
          <Description>Componente personalizavel de Card para Quiz</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
  argTypes: {
    cor: {
      description: "Cor",
      defaultValue: "#04eb04",
      control: { type: "color", presetColors: ["red", "green"] },
    },
    nome: {
      description: "Título",
      defaultValue: "React",
      control: { type: "text" },
    },
    topicos: {
      description: "topicos",
      defaultValue: "Basics, Components, ESNext Syntax, Hooks, Tools",
      control: { type: "text" },
    },
  },
};

const Template = (args) => <CardQuiz {...args} />;

export const Sample = Template.bind({});
