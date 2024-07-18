import { INCOMING, CLEAR, COUNTADD, ADDMESSAGE } from './Action';
const Initial_State = {
    screen1: [],
    count: '',
    message: []
}
const Screen1Reducer = (state = Initial_State, action) => {



    switch (action.type) {

        case INCOMING:

            // let arr = state.screen1;
            // const index = state.screen1.findIndex((e) => e.screen_id === action.payload.screen_id);
            // if (index === -1) {
            //     arr.push(action.payload);
            // } else {
            //     let a = action.payload;
            //     arr[index].screen_id = a.screen_id;
            //     arr[index].template = a.template;
            //     arr[index].tempname = a.tempname;
            //     arr[index].name = a.name;
            //     arr[index].nf = a.nf;
            //     arr[index].nc = a.nc;
            //     arr[index].nfor = a.nfor;
            //     arr[index].time = a.time;
            //     arr[index].tc = a.tc;
            //     arr[index].tf = a.tf;
            //     arr[index].tfor = a.tfor;
            //     arr[index].profile = a.profile;
            //     arr[index].screen = a.screen;
            //     arr[index].action = a.action;
            //     arr[index].actionValue = a.actionValue;
            //     arr[index].scenename = a.scenename
            // }
            return {
                ...state,
                screen1: state.screen1.concat(action.payload)
            }

        case CLEAR:
            return {
                ...state,
                screen1: []
            }

        case COUNTADD:

            return {
                ...state,
                count: action.payload
            }
        case ADDMESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default: return state
    }
}
export default Screen1Reducer