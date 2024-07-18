import { StyleSheet } from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';
const Styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column'
    },
    touch: {
        position: "absolute",
        borderRadius: 8,
        width: ResWidth(40),
        height: ResHeight(12),
        flexDirection: "column",
        marginTop: ResHeight(24),
        marginLeft: ResWidth(10),
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    buttonView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.7,
    },
    textview2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: ResWidth(80),
        justifyContent: 'space-between',

    },
    alphabets: {
        fontSize: ResFontSizes(1.7),
        color: '#FFFFFF',
        textAlign: 'center'
    },
    circle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dial: {
        width: ResWidth(15),
        height: ResWidth(15),
    },
    bottom: {
        width: ResWidth(100),
        flexDirection: 'row',
        height: ResHeight(15),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.2,
        padding: 3.5,
        borderRadius: 5
    },
    bottomview: {
        flexDirection: 'row',
        width: ResWidth(100),
        margin: ResWidth(1),
        height: ResHeight(10),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 7,
        backgroundColor: '#2E2E2E'
    },
    bottomdial: {
        width: ResWidth(15),
        height: ResWidth(15),

    },
});

export default Styles;