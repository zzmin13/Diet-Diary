import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./routes/home/home";

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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
