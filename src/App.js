import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer'
import Home from './components/Home';
import AuthSwitch from './components/AuthSwitch';
import Characters from './components/Characters'
import Navbar from './components/Navbar';
import './fontawesome';

// Swalalert
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const store = createStore(reducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/AuthSwitch" component={AuthSwitch} />
            <Route path="/Characters" component={Characters} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
