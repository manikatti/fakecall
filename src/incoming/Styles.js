import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touch: {
        position: "absolute",
        borderRadius: 8,
        width: ResWidth(40),
        height: ResHeight(12),
        flexDirection: "column",
        marginTop: ResHeight(40),
        marginLeft: ResWidth(10),
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    statusbar: {
        height: ResHeight(4),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    statusicon: {
        flex: 3.3,
        alignItems: "center",
        justifyContent: "center"
    },
    topView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    profileview: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
   imageborder: {
        height: ResWidth(26),
        width: ResWidth(26),
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 8,
        shadowOpacity: 1.0,
        borderWidth: 1,
        borderRadius: ResWidth(16),
        borderColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    profileImage: {
        width: ResWidth(24),
        borderRadius: ResWidth(24),
        height: ResWidth(24)
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    callbtn: {
        borderRadius: ResWidth(30),      
        borderWidth: 1,
        width: ResWidth(25),
        height: ResWidth(25),
        alignItems: "center",
        justifyContent: 'center'
    },
    callimage: {
        width: ResWidth(25),
        height: ResWidth(25),
    },
});
export default Styles;