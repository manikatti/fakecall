import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis"

const Styles = StyleSheet.create({
    full: {
        flex: 1,
        flexDirection: "column",
    },
    logoIcon:{
        width:ResWidth(40),
        height:ResWidth(40),
        borderRadius:ResWidth(40)
    },
    btn: {
        width: "80%",
        color: '#fff',
        padding: 10,
        backgroundColor: '#000',
        textAlign: "center",
        fontSize: 18
    },
    view1: {
        flex: 3.9,
        alignItems: "center",
        justifyContent: "center",
    },
    view2: {
        flex: 6.1,
        margin: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    viewrow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 5,
        flexDirection: "row"
    },
    viewcolumn: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        margin: ResWidth(3),
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        width: ResWidth(40),
        height: ResWidth(35),
        borderRadius: ResWidth(5),

    },
    icon: {
        width: ResWidth(20),
        height: ResWidth(20),
    },
    btntext: {
        fontSize: ResFontSizes(2),
        textAlign: "center",
        margin: ResWidth(1),

    }

});


export default Styles;