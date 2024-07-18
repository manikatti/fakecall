import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
const Styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column"
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
    model: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    viewmodel: {
        width: ResWidth(100),
        height: ResHeight(60),
        backgroundColor: 'white',
        justifyContent: "space-around",
        alignItems: "center"
    },
    edittext: {
        width: ResWidth(80),
        height: ResWidth(10)
    },
    saveEdit: {
        width: ResWidth(55),
        height: ResWidth(10)
    },
    fontpicker: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        flex: 4
    },
    fontpicker1: {
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 5,
        flex: 5.8,
        paddingLeft: ResWidth(5)
    },
    Viewcolor: {
        height: ResWidth(35),
        width: ResWidth(80),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    ColorPicker: {
        width: ResWidth(35),
        height: ResWidth(30),
    },
    item: {
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
    screen: {
        flex: 9,
        flexDirection: "column"
    },
    phonename: {
        fontSize: ResFontSizes(2),
        textAlign: "center",
    },


    timerModel: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
    },
    timerModelView: {
        width: ResWidth(80),
        height: ResWidth(60),
        padding: ResWidth(5),
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    titleView: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bodyView: {
        flex: 6,
        padding: ResWidth(2),
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    Slider: {
        alignItems: 'center',
        justifyContent: "center",
        width: ResWidth(50),
        height: ResHeight(10),
    },
    text: {
        alignItems: 'center',
        justifyContent: "center",
        width: ResWidth(20),
        height: ResHeight(4)
    },
    btnview: {
        alignItems: 'center',
        justifyContent: "center",
        width: ResWidth(15),
        height: ResHeight(6),
        borderRadius: 5,
        backgroundColor: 'green'
    },
    btn: {
        fontSize: ResFontSizes(2),
        textAlign: 'center',
        color: 'white'
    },
    title: {
        fontSize: ResFontSizes(2),
        textAlign: 'center',
        color: '#000'
    },


    model1: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: ResWidth(8),
        padding: ResWidth(1),
        backgroundColor: 'transparent',
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
    alertView: {
        width: ResWidth(60),
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around"
    },


});
export default Styles;