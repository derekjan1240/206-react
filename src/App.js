import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer'
import { 
  Grid,
  Button,
} from '@material-ui/core';
import Home from './components/Home';
import About from './components/About';

const store = createStore(reducer);

function App() {
  return (
    <>
      <BrowserRouter>
        <Grid 
          container
          alignItems="center"
          justify="center"
          spacing={2}>
          <Grid item xs={12} style={{textAlign:"center"}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn2wyQqnGuNSOGOJJavVTLF6KNF4yM40ahl4N4kzRmx0J_iTAC&usqp=CAU' alt="" style={{width:"5%", borderRadius:"50%", marginTop:30}}/>
          </Grid>
          <Grid item>
            <Button href="/" color="primary">Home</Button>
          </Grid>
          <Grid item>
            <Button href="/About" color="primary">About</Button>
          </Grid>
        </Grid>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Provider store={store}>
      </Provider>
    </>
  );
}

export default App;
