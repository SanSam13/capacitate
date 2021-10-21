import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home'
import Us from './views/Us'

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/us' exact component={Us} />
        </Switch>
        <Footer></Footer>
      </Router>  
    </>
  );
}

export default App;
