
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages';
import SigninPage from './pages/signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
