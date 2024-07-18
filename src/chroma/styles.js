import { StyleSheet } from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column'
    },
    touch: {
        position: "absolute",
        borderRadius: 8,
        width: ResWidth(40),
        height: ResHeight(12),
        flexDirection: "column",
        marginTop: ResHeight(35),
        marginLeft: ResWidth(5),
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    menu: {
        backgroundColor: '#e3e3e3',
        height: ResWidth(40),
        width: ResWidth(50),
        margin: ResWidth(10),
        alignSelf: 'center',
        flexDirection: 'column',
    },
    container1: {
        flexDirection: 'row',
        flex: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8
    },
    btn_text: {
        flex: 6
    },
    btn:{
        width: ResWidth(10),
        height: ResWidth(10),
        borderRadius:ResWidth(10)/2
    },
    btn2: {
        flex: 4,
       
    },
    container2: {
        flexDirection: 'row',
        flex: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 8
    },
    image: {
        flex: 3,
        width: 18,
        height: 40,
        margin: 2,
    },
    colorPicker2: {
        height: ResWidth(30),
        width: ResWidth(30),
    },
    colorPicker: {
        marginTop: 150,
        height: 128,
        width: 200,
        backgroundColor: 'white'
    },
    corner1: {
        margin: ResWidth(3),
        width: ResWidth(6),
        height: ResWidth(6),
        position: "absolute", top: 0, left: 0,
    },
    corner2: {
        margin: ResWidth(3),
        width: ResWidth(6),
        height: ResWidth(6),
        position: "absolute", top: 0, right: 0,
    },
    corner3: {
        margin: ResWidth(3),
        width: ResWidth(6),
        height: ResWidth(6),
        position: "absolute", bottom: 0, left: 0,
    },
    corner4: {
        margin: ResWidth(3),
        width: ResWidth(6),
        height: ResWidth(6),
        position: "absolute", bottom: 0, right: 0,
    },
    center: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },



});
export default styles;