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
        marginTop: ResHeight(24),
        marginLeft: ResWidth(10),
        backgroundColor: 'lightgray',
        justifyContent: 'center'
    },
    firstContent: {
        flex: 1,
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
    secondtContent: {
        flex: 1,
    },
    secondSub: {
        flexDirection: 'row',
        marginLeft: ResWidth(10),
        marginRight: ResWidth(10),
        marginTop: ResHeight(3),
        justifyContent: 'space-around'

    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E433B'
    },
    text: {
        color: '#fff'
    },
    thirdContent: {
        flex: 0.7,
        alignItems: 'center',
        marginTop: ResHeight(10),
    },
    image: {
        width: ResWidth(23),
        height: ResHeight(13)
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
});

export default Styles;