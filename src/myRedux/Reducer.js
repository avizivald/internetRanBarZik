
export default function shiduchReducer(state = {}, action) {
    
    let newState = Object.assign({}, state);
            return Object.assign(newState, { newPerson: action.payload })

}