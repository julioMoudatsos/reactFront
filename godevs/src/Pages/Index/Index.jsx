import { Component } from 'react';
import { Assistencia } from '../../Components/Index/Assistencia/Assistencia';
import { Categorias } from '../../Components/Index/Categorias/Categorias';
import { Container } from '../../Components/Index/Container/Container';
import { Footer } from '../../Components/Index/Footer/Footer';
import { Header } from '../../Components/Index/Header/Header';
import { Info } from '../../Components/Index/Info/Info';
import { Sobre } from '../../Components/Index/Sobre/Sobre';

export default class Index extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Info />
        <Sobre />
        <Categorias />
        <Assistencia />
        <Footer />
      </Container>
    );
  }
}
