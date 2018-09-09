
  const defaultState = {
      abc: {
        id: 'abc',
        text: 'Eat lunch',
        done: false
    }
}

export default (state = defaultState, action) => {

    const { type, payload } = action

    if (type === 'TODOS_TOGGLE_DONE') {
        
        const id = payload

        return {
                ...state,
                [id]: {
                    ...state[id],
                    done: !state[id].done 
                }
        }
    }

    if (type === 'TODOS_ADD') {
        
       const { id, text } = payload
        
        return {

                ...state,
                [id]: {
                    id,
                    text,
                    done: false
                }
        }
    }

    if (type === 'TODOS_DELETE') {

        const { id } = payload

        delete state[id]

        return {
                ...state,
            }
    }

    return state;

}