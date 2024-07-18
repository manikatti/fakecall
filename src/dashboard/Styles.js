import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: ResWidth(30),
        marginHorizontal: ResWidth(2),
        flexDirection: "column",

    },
    item1: {
        width: ResWidth(37),
        height: ResHeight(25.4),
        backgroundColor: 'white',
        padding: ResWidth(2),
        flexDirection: "column",
        borderWidth: 1,

        margin: 2,
        borderColor: "gray",
    },
    item2: {
        width: ResWidth(37),
        height: ResHeight(25.4),
        backgroundColor: 'white',
        padding: ResWidth(2),
        flexDirection: "column",
        borderWidth: 1,
        margin: 2,
        borderColor: "gray",
        alignItems: 'center'
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        width: ResWidth(100),
        justifyContent: "space-between",
        //alignItems: 'flex-start',
        padding: 8,
        backgroundColor: '#D4D8DA'

    },
    divide: {
        height: ResHeight(37),
        alignItems: "flex-start",
        justifyContent: "center",

    },
    screen: {
        flex: 9,
        flexDirection: "column"
    },
    statusbar: {
        height: ResHeight(4),
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    phonename: {
        fontSize: ResFontSizes(2),
        textAlign: "center",
    },
    phonename1: {
        fontSize: ResFontSizes(2.2),
        textAlign: "center",
        fontWeight:'bold'
    },
    statusicon: {
        flex: 3.3,
        alignItems: "center",
        justifyContent: "center"
    },
    main: {
        flex: 1,
        flexDirection: "column",
    },
    keyboard: {
        flex: 1,
    },
    view1: {
        height: ResHeight(25),
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    view3: {
        height: ResHeight(25),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    view2: {
        height: ResHeight(25),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    iii: {
        flex: 6,
        alignItems: "center",
        justifyContent: "center"
    },
    nameview: {
        flex: 6,
        justifyContent: "center",
        alignItems: "center"
    },
    profileview: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",

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
    imageborder1: {
        height: ResWidth(8),
        width: ResWidth(8),
        borderWidth: 1,
        borderRadius: ResWidth(6),
        borderColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    profile: {
        height: ResWidth(25),
        width: ResWidth(25),
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 8,
        shadowOpacity: 1.0,
        borderRadius: ResWidth(16)
    },
    profileview1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center',
    },
    profile1: {
        height: ResWidth(7),
        width: ResWidth(7),
        shadowRadius: 8,
        borderRadius: ResWidth(7)
    },
    model: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    model1: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: ResWidth(8),
        padding: ResWidth(1),
        backgroundColor: 'transparent',
    },
    listviewmodel: {
        flexDirection: 'column',
        borderRadius: ResWidth(1),
        width: ResWidth(80),
        height: ResHeight(80),
        backgroundColor: 'white',
        justifyContent: "space-around",
        alignItems: "center"
    },
    templateModal: {
        flexDirection: 'column',
        borderRadius: ResWidth(1),
        width: ResWidth(60),
        height: ResHeight(18),
        backgroundColor: 'white',
        justifyContent: "space-around",
        alignItems: "center"
    },

    viewmodel: {
        width: ResWidth(100),
        height: ResHeight(60),
        backgroundColor: 'white',
        justifyContent: "space-around",
        alignItems: "center"
    },
    edittext: {
        width: ResWidth(55),
        height: ResWidth(10)
    },

    Viewcolor: {
        height: ResWidth(35),
        width: ResWidth(80),
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    fontpicker: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        width: ResWidth(30),

    },
    fontpicker1: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 10,
        width: ResWidth(45),
        paddingLeft: ResWidth(5)
    },
    ColorPicker: {
        width: ResWidth(35),
        height: ResWidth(30),
    },
    touch: {
        borderRadius: 8,
        width: ResWidth(40),
        height: ResHeight(12),
        flexDirection: "column",
        margin: 10,
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    touch1: {
        borderRadius: 8,
        width: ResWidth(40),
        height: ResHeight(15),
        flexDirection: "column",
        backgroundColor: 'lightgray',

    },
    menu1: {
        flex: 1,
        flexDirection: "column"
    },
    tempname: {
        marginTop: 5,
        width: ResWidth(35),
        height: ResWidth(12)
    },
    btn: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'blue'
    },
    callview: {
        flexDirection: 'row',
        height: ResHeight(35),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    callbtn: {
        width: ResWidth(25),
        height: ResWidth(25),
        alignItems: "center",
        justifyContent: 'center'
    },
    callimage: {
        width: ResWidth(25),
        height: ResWidth(25),
    },
    callimage1: {
        width: ResWidth(8),
        height: ResWidth(8),
    },
    callimage2: {
        width: ResWidth(6),
        height: ResWidth(6),
    },

    topView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly"

    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    alertView: {
        width: ResWidth(60),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around"
    }

});


export default Styles;