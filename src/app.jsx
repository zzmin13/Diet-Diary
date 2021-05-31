import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import Join from "./routes/join/join";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Header authService={authService} />
      <Route
        path={["/", "/home"]}
        exact={true}
        render={(props) => {
          return <Home {...props} />;
        }}
      />
      <Route
        path="/login"
        exact={true}
        render={(props) => {
          return <Login authService={authService} {...props} />;
        }}
      />
      <Route
        path="/join"
        exact={true}
        render={(props) => {
          return <Join authService={authService} {...props} />;
        }}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
