const initState = {
    count: 6
}
export default (state = initState, action)=> {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + 1
            }
        case 'add_w':
            return {
                count: state.count + action.payload
            }
        case 'adc':
            return {
                count: state.count -1
            }
        default:
            return state
    }
}