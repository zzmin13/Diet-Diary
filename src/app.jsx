import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import Join from "./routes/join/join";
import Main from "./routes/main/main";
import LoginHeader from "./components/loginHeader/loginHeader";

function App({ authService }) {
  return (
    <>
      <BrowserRouter>
        <Route
          path={["/", "/home"]}
          exact={true}
          render={(props) => {
            return (
              <>
                <Header authService={authService} />
                <Home authService={authService} {...props} />
                <Footer />
              </>
            );
          }}
        />
        <Route
          path="/login"
          exact={true}
          render={(props) => {
            return (
              <>
                <Header authService={authService} />
                <Login authService={authService} {...props} />
                <Footer />
              </>
            );
          }}
        />
        <Route
          path="/join"
          exact={true}
          render={(props) => {
            return (
              <>
                <Header authService={authService} />
                <Join authService={authService} {...props} />
                <Footer />
              </>
            );
          }}
        />
        <Route
          path="/main"
          exact={true}
          render={(props) => {
            return (
              <>
                <LoginHeader authService={authService} />
                <Main authService={authService} {...props} />
                <Footer />
              </>
            );
          }}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
