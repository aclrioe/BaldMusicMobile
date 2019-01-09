import { INCREMENT, DECREMENT, RESET } from 'actions/counter';
const initState = {
    count: 0
}
const reducer = ( state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: ++state.count
            }
        case DECREMENT:
            return {
                count: --state.count
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state
    }
}
export default reducer