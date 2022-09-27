import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Dev/Home/Home';
import Works from './Pages/Dev/Works/Works';
import Quiz from './Pages/Dev/Quiz/Quiz';
import { PerfilUser } from './Pages/Dev/PerfilUser/PerfilUser';
import { Questions } from './Pages/Dev/Questions/Questions';
import Messages from './Pages/Dev/Messages/Messages';
import Index from './Pages/Index/Index';
import Login from './Pages/Dev/Login/Login';
import SignUp from './Pages/Dev/SignUp/SignUp';
import { QuizCurso } from './Pages/Dev/QuizCurso/QuizCurso';
import LoginCont from './Pages/Contratante/Login/LoginCont';
import SignUpCont from './Pages/Contratante/SignUp/SignUpCont';
import HomeCont from './Pages/Contratante/HomeCont/HomeCont';
import { RequireAuth, RequireAuthCont } from './Context/RequireAuth';
import { AuthProvider } from './Context/AuthProvider';
import AddWork from './Pages/Contratante/AddWork/AddWork';
import History from './Pages/Contratante/History/History';
import { ViewWork } from './Pages/Dev/ViewWork/ViewWork';
import HistoryDev from './Pages/Dev/History/HistoryDev';
import { Ata } from './Pages/Dev/Ata/Ata';
import { AtaContratante } from './Pages/Contratante/AtaContratante/AtaContratante';
import MessagesContratante from './Pages/Contratante/MessagesContratante/MessagesContratante';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="/dev">
            <Route
              path="/ata"
              element={
                <RequireAuth>
                  <Ata />
                </RequireAuth>
              }
            />

            <Route
              path="/works"
              element={
                <RequireAuth>
                  <Works />
                </RequireAuth>
              }
            />

            <Route
              path="/historico"
              element={
                <RequireAuth>
                  <HistoryDev/>
                </RequireAuth>
              }
            />

            <Route
              path="/works/:id"
              element={
                <RequireAuth>
                  <ViewWork />
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <PerfilUser />
                </RequireAuth>
              }
            />
            <Route
              path="/dev-quiz"
              element={
                <RequireAuth>
                  <Quiz />
                </RequireAuth>
              }
            />
            <Route
              path="/dev-quizcurso/:id"
              element={
                <RequireAuth>
                  <QuizCurso />
                </RequireAuth>
              }
            />
            <Route
              path="/dev-quizcursoquestion/:id"
              element={
                <RequireAuth>
                  <Questions />
                </RequireAuth>
              }
            />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/mensagens"
              element={
                <RequireAuth>
                  <Messages />
                </RequireAuth>
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/cont">
            <Route
              path="/atacontratante"
              element={
                <RequireAuthCont>
                  <AtaContratante />
                </RequireAuthCont>
              }
            />
            <Route path="/home">
              <Route
                index
                element={
                  <RequireAuthCont>
                    <HomeCont />
                  </RequireAuthCont>
                }
              />
              <Route
                path="/projeto"
                element={
                  <RequireAuthCont>
                    <AddWork />
                  </RequireAuthCont>
                }
              />

            </Route>
            <Route
              path="/historico"
              element={
                <RequireAuthCont>
                  <History />
                </RequireAuthCont>
              }
            />
            <Route
              path="/mensagens"
              element={
                <RequireAuthCont>
                  <MessagesContratante />
                </RequireAuthCont>
              }
            />
            <Route path="/login" element={<LoginCont />} />
            <Route path="/sign-up" element={<SignUpCont />} />
          </Route>
        </Routes>
      </AuthProvider>
    );
  }
}

export default App;
