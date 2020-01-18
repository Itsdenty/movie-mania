import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './styles/style.scss';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Home from './components/Home';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
