import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Dev/Home/Home";
import Works from "./Pages/Dev/Works/Works";
import Quiz from "./Pages/Dev/Quiz/Quiz";
import { PerfilUser } from "./Pages/Dev/PerfilUser/PerfilUser";
import { Questions } from "./Pages/Dev/Questions/Questions";
import Messages from "./Pages/Dev/Messages/Messages";
import Index from "./Pages/Index/Index";
import Login from "./Pages/Dev/Login/Login";
import SignUp from "./Pages/Dev/SignUp/SignUp";
import { QuizCurso } from "./Pages/Dev/QuizCurso/QuizCurso";
import LoginCont from "./Pages/Contratante/Login/LoginCont";
import SignUpCont from "./Pages/Contratante/SignUp/SignUpCont";
import HomeCont from "./Pages/Contratante/HomeCont/HomeCont";
import { RequireAuth, RequireAuthCont } from "./Context/RequireAuth";
import { AuthProvider } from "./Context/AuthProvider";
import AddWork from "./Pages/Contratante/AddWork/AddWork";
import History from "./Pages/Contratante/History/History";
import { ViewWork } from "./Pages/Dev/ViewWork/ViewWork";
import HistoryDev from "./Pages/Dev/History/HistoryDev";
import { Ata } from "./Pages/Dev/Ata/Ata";
import { AtaContratante } from "./Pages/Contratante/AtaContratante/AtaContratante";
import MessagesContratante from "./Pages/Contratante/MessagesContratante/MessagesContratante";
import { PerfilDev } from "./Pages/Contratante/PerfilDev/PerfilDev";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/dev/ata"
            element={
              <RequireAuth>
                <Ata />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/works"
            element={
              <RequireAuth>
                <Works />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/historico"
            element={
              <RequireAuth>
                <HistoryDev />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/works/:id"
            element={
              <RequireAuth>
                <ViewWork />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/profile"
            element={
              <RequireAuth>
                <PerfilUser />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/dev-quiz"
            element={
              <RequireAuth>
                <Quiz />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/dev-quizcurso/:id"
            element={
              <RequireAuth>
                <QuizCurso />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/dev-quizcursoquestion/:id"
            element={
              <RequireAuth>
                <Questions />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/dev/mensagens"
            element={
              <RequireAuth>
                <Messages />
              </RequireAuth>
            }
          />
          <Route path="/dev/sign-up" element={<SignUp />} />
          <Route path="/dev/login" element={<Login />} />

          <Route
            path="/cont/atacontratante"
            element={
              <RequireAuthCont>
                <AtaContratante />
              </RequireAuthCont>
            }
          />
          <Route
            path="/cont/home"
            element={
              <RequireAuthCont>
                <HomeCont />
              </RequireAuthCont>
            }
          />
          <Route
            path="/cont/projeto/:idProjeto/dev/:id"
            element={
              <RequireAuth>
                <PerfilDev />
              </RequireAuth>
            }
          />
          <Route
            path="/cont/home/projeto"
            element={
              <RequireAuthCont>
                <AddWork />
              </RequireAuthCont>
            }
          />
          <Route
            path="/cont/historico"
            element={
              <RequireAuthCont>
                <History />
              </RequireAuthCont>
            }
          />
          <Route
            path="/cont/mensagens"
            element={
              <RequireAuthCont>
                <MessagesContratante />
              </RequireAuthCont>
            }
          />
          <Route path="/cont/login" element={<LoginCont />} />
          <Route path="/cont/sign-up" element={<SignUpCont />} />
        </Routes>
      </AuthProvider>
    );
  }
}

export default App;
