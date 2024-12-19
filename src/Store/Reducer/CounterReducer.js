import { ADC, ADD, ADD_W } from "../Actions/CounterActionTypes";

const initState = {
    count: 6
}
export default (state = initState, action)=> {
    switch (action.type) {
        case ADD:
            return {
                count: state.count + 1
            }
        case ADD_W:
            return {
                count: state.count + action.payload
            }
        case ADC:
            return {
                count: state.count -1
            }
        default:
            return state
    }
}