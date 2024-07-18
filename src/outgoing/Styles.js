import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textview: {
        marginTop: ResHeight(5),
        flex: 0.2,
        marginLeft: ResWidth(5),
        borderRadius: 5,
        width: ResWidth(80),
        marginBottom: ResHeight(3),
        height: ResHeight(6),
    },
    edit_text: {
        padding: 8,
        marginLeft: ResWidth(10),
        color: 'lightgray',
        fontSize: 28,
        marginTop: ResHeight(8),
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    buttonView: {
        marginLeft: ResWidth(12),
        marginRight: ResWidth(12),
        marginBottom: ResHeight(20),
        flex: 0.6,
    },
    textview2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: ResHeight(1.5),
        justifyContent: 'space-between',
        marginLeft: ResWidth(1),
        marginRight: ResWidth(1)
    },
    circle: {
        width: ResWidth(16),
        height: ResWidth(16),
        borderRadius: ResWidth(16) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2B2B2B',
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    number: {
        fontSize: 30,
        color: '#FFFFFF',
    },
    alphabets: {
        fontSize: 11,
        color: '#FFFFFF'
    },
    textview3: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ResWidth(3)
    },
    dial: {
        width: ResWidth(18),
        height: ResWidth(18)
    },
    bottom: {
        flexDirection: 'row',
        height: ResHeight(15),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 0.1,
        padding: 2,
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
    icon: {
        flexDirection:'column',
        width: ResWidth(10),
        height: ResWidth(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize:ResFontSizes(1.2),
        textAlign: 'center',
        color:'white'
    },
});

export default Styles;