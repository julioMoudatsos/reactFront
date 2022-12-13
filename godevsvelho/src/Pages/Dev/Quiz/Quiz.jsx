import { Component } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { IntroQuiz } from '../../../Components/Quiz/Intro/IntroQuiz';

export default class Quiz extends Component {
  render() {
    return (
      <>
      <Dashboard>
          <IntroQuiz />
          </Dashboard>
      </>
    );
  }
}
