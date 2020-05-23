const ADD_TODOLIST = 'ADD_TODOLIST';
const SWITCH_LIGHT = 'SWITCH_LIGHT';

const initState = {
  lightState: true,
  todoList: ['first'],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOLIST: {
      const tempTodo = state.todoList.map(list => list);
      tempTodo.push(action.payload.listName);
      return {
        todoList: tempTodo,
        lightState: state.lightState,
      };
    }
    case SWITCH_LIGHT: {
      return {
        todoList:state.todoList,
        lightState: !state.lightState,
      };
    }
    default:
      return state;
  }
};

export { reducer }

// const rootReducer = combineReducers({
//   theDefaultReducer,
//   firstNamedReducer,
//   secondNamedReducer
// })

// export { rootReducer }