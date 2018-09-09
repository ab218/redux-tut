const defaultState = {
    count: 0,

    todos: {
        abc: {
            id: 'abc',
            text: 'Eat lunch',
            done: false
        }
    }, 
}
 

const rootReducer = (state = defaultState, action) => { 

    const { type, payload } = action

    if (type === 'TODOS_TOGGLE_DONE') {
        
        const id = payload
        
        // let newDoneStatus
        // const theTodo = state.todos[id]

        // if (theTodo.done) {
        //     newDoneStatus = false 
        // } else {
        //     newDoneStatus = true
        // }
        
        return {
            ...state,
            todos: {
                ...state.todos,
                [id]: {
                    ...state.todos[id],
                    done: !state.todos[id].done 
                }

            }

        }
    }

    if (type === 'TODOS_ADD') {
        
       const { id, text } = payload
       
        return {
            ...state,
            todos: {
                ...state.todos,
                [id]: {
                    id,
                    text,
                    done: false
                }
            }
        }
    }

    if (type === 'TODOS_DELETE') {

        const { id } = payload

        delete state.todos[id]

        return {
            ...state, 
            todos: {
                ...state.todos,
            }
        }
    }

    if (type === 'COUNTER_INC') {

        const amount = payload

        return {
            ...state, count: state.count + amount,
        }
    
    }










    return state;
 }

 const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


window.store = store;
console.log(store);