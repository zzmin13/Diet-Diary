import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./routes/home/home";
import Login from "./routes/login/login";
import Join from "./routes/join/join";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
          return <Login {...props} />;
        }}
      />
      <Route
        path="/join"
        exact={true}
        render={(props) => {
          return <Join {...props} />;
        }}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
