import { TIMER } from './Action';
const Initial_State = {
    timer: ""
}
const Screen2Reducer = (state = Initial_State, action) => {

    switch (action.type) {

        case TIMER:
            console.log(action.payload)

            return {
                ...state,
                timer: action.payload
            }

        default: return state
    }

}
export default Screen2Reducer