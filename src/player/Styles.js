import {
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'row',
        height: ResHeight(10),
        margin: ResWidth(1),
        borderRadius:ResWidth(3),
        backgroundColor:'#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        shadowColor: "gray",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    screen: {
        flex: 9
    },
    phonename: {
        flex: 7,
        padding: ResWidth(1.5),
        textAlign: 'left',
        fontSize: ResFontSizes(2),
        color: "#000"
    },
    viewbtn: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntext: {
        textAlign: 'center',
        fontSize: ResFontSizes(2),
        color: "#000"
    },
    model: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: ResWidth(1),
        backgroundColor: 'transparent',
    },
    viewmodel: {
        borderRadius: ResWidth(1),
        width: ResWidth(80),
        padding:ResWidth(5),
        flexDirection: "column",
        alignItems: 'center',
        height: ResHeight(30),
        backgroundColor: 'white',
        justifyContent: "space-around",
    },
    timers: {
        width: ResWidth(80),
        flexDirection: "row",  
        alignItems: 'center',
        justifyContent: "center",
    },
    Slider:{
        alignItems: 'center',
        justifyContent: "center",
        width: ResWidth(50), 
        height: ResHeight(10), 
    },
    text:{
        alignItems: 'center',
        justifyContent: "center",
        width: ResWidth(20), 
        height: ResHeight(4),         
    },
    btnok:{
        borderRadius:6,
        width: ResWidth(20), 
        height: ResHeight(5), 
        backgroundColor:'blue',
        alignItems: 'center',
        justifyContent: "center",     
    },
    tilescc:{
        alignItems: 'center',
        justifyContent: "center",   
        color:'#000',
        textAlign:"center",
        fontSize:ResFontSizes(2.5)
    },
    btntexs:{
        alignItems: 'center',
        justifyContent: "center",   
        color:'#000',
        textAlign:"center",
        fontSize:ResFontSizes(1.5)
    },
    btntexts:{
        alignItems: 'center',
        justifyContent: "center",   
        color:'white',
        textAlign:"center",
        fontSize:ResFontSizes(2)
    },
    model1: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: ResWidth(8),
        padding: ResWidth(1),
        backgroundColor: 'transparent',
    },
    viewflatlist: {
        borderRadius: ResWidth(1),
        width: ResWidth(80),
        height: ResHeight(80),
        backgroundColor: 'white',
        justifyContent: "center",
        alignItems: "center"
    },
    item1: {
        width: ResWidth(37),
        height: ResHeight(25.4),
        backgroundColor: 'white',
        margin: ResWidth(1),
        padding: ResWidth(2),
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: "gray"
    },
   
});
export default Styles;