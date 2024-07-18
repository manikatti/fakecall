import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstContent: {
        flex: 1.5,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
    },
    secondContent: {
        flex: 7.5,
        backgroundColor: '#fff'
    },
    thirdContent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit_text1: {
        width: ResWidth(55),
        height: ResHeight(7),
        marginLeft: ResWidth(3)
    },
    textInput: {
        flexDirection: 'row',
        width: ResWidth(68),
        height: ResHeight(7),
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30
    },
    edit_text: {
        width: ResWidth(68),
        height: ResHeight(7),
        borderRadius: 7      
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
    item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: 'row'
    },
    itemIn: {
        marginLeft: 20
    },
    itemOut: {
        alignSelf: 'flex-end',
        marginRight: 20
    },
    balloon: {
        // maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
    },
    arrowContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
    },
    arrowLeftContainer: {
        marginTop: 22,
        marginLeft: 2,
        alignItems: 'flex-start'
    },

    arrowRightContainer: {
        marginTop: 22,
        marginRight: 2,
        alignItems: 'flex-end',
    },

    arrowLeft: {
        left: moderateScale(-6, 0.5),
    },

    arrowRight: {
        right: moderateScale(-6, 0.5),
    }
});

export default Styles;