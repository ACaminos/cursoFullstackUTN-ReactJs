import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Login from './pages/login';
import Registro from './pages/registro';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Header from './components/header';
import Footer from './components/footer';
import Detalle from './pages/detalles';
import Container from 'react-bootstrap/Container';
import NotFound from './pages/notFound.';
function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Container>
            <Switch>
              <Route path="/login">
                <Login/>
              </Route>

              <Route path="/registro">
                <Registro/>
              </Route>

              <Route path="/producto/:data">
                <Detalle/>
              </Route>

              <Route path="/">
                <Home/>
              </Route>

              <Route path="*">
                <NotFound/>
              </Route>
            </Switch>
          </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
