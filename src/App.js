import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer'
import Home from './components/Home';
import About from './components/About';
import Todo from './Todo';
import HookTest from './HookTest';

const store = createStore(reducer);

function App() {
  return (
    <>
    <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
    <Provider store={store}>
      <HookTest></HookTest>
      <Todo></Todo>
    </Provider>
    </>
  );
}

export default App;
