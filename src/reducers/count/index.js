
const defaultState = 999;

export default (state = defaultState, action) => {

    const { type, payload } = action;


    if (type === 'COUNTER_INC') {
        const amount = payload
        return state + amount
    }

    if (type === 'COUNTER_DEC') {
        const amount = payload
        return state - amount
    }

    return state;
}