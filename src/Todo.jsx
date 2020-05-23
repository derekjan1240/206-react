import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Todo = () => {
    const [listName, setListName] = useState('');
    const todoList = useSelector(state => state.todoList);
    
    // const [lightState, setLightState] = useState(true);
    const lightState = useSelector(state => state.lightState);
  
    // 用 useDispatch 產生 dispatch 方法
    const dispatch = useDispatch();
    
    const addTodoList = () => {
      console.log('add');
      // 用法一樣
      dispatch({
        type: 'ADD_TODOLIST',
        payload: { listName, },
      });
    };

    const setLight = (lightState) => {
      console.log('setLight!', lightState);
      dispatch({
        type: 'SWITCH_LIGHT'
      })
    };
  
    return (
      <>
      <Grid container spacing={2}>
        <Grid item>
          {lightState ? <p>True</p> : <p>False</p>}
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={() => setLight()}>
            Switch
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={() => setLight()}>
            STOP
          </Button>
        </Grid>
      </Grid>

        <input value={listName} onChange={(e) => { setListName(e.target.value); }} />
        <button type="button" onClick={addTodoList}>
          增加待辦事項
        </button>
        <ul>
          {todoList.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </>
    );
  };
  
  export default Todo;