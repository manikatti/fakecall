import React, { Component } from "react";
import {
    ImageBackground,

    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';




class Attend extends React.Component {


    render() {
        const { item } = this.props;
        return (
            <ImageBackground
                source={
                    item.bg ?
                        {
                            uri: item.template
                        } :
                        require("../../assets/screen/bg1.png")

                }
                style={Styles.container}>
                <View style={Styles.main}>
                    <View style={Styles.firstContent}>

                        <View style={{ flex: 0.2, flexDirection: "row", }}>
                            <View style={{ marginLeft: ResWidth(43) }}>
                                <Text style={{ fontSize: parseInt(item.tf), fontFamily: item.tfor, color: item.tc }}>{item.time}</Text>
                            </View>
                            <View style={{ marginLeft: ResWidth(37) }}>

                            </View>
                        </View>
                        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: parseInt(item.nf), color: item.nc, fontFamily: item.nfor }}>{item.name}</Text>
                            <Text style={Styles.mobiles}>8654321234</Text>
                            <Text style={Styles.mobiles}>{this.props.timer}</Text>
                        </View>
                    </View>
                    <View style={Styles.secondtContent}>
                        <View style={Styles.secondSub}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Ionicons name="ios-mic-off" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>mute</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Ionicons name="ios-keypad" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>Keypad</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Ionicons name="ios-mic-off" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>audio</Text>
                            </View>

                        </View>

                        <View style={Styles.secondSub}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Feather name="plus" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>mute</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Ionicons name="ios-videocam" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>Keypad</Text>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <View style={Styles.circle}>
                                    <Ionicons name="ios-contact" size={35} color="#fff" />
                                </View>
                                <Text style={Styles.text}>audio</Text>
                            </View>

                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.onPress('cancel')}
                        style={Styles.thirdContent}>
                        <Image
                            style={Styles.image}
                            source={require('../../assets/img/cancel.png')}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }

}


const Styles = StyleSheet.create({
    container: {
        width: ResWidth(100),
        height: ResHeight(100)
    },
    main: {
        flex: 3
    },
    userName: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    mobiles: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',

    },
    firstContent: {
        flex: 1,

    },
    secondtContent: {
        flex: 1,
    },
    thirdContent: {
        flex: 0.7,
        alignItems: 'center',
        marginTop: ResHeight(10),


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
    image: {
        width: ResWidth(23),
        height: ResHeight(13)
    }


});
export default Attend;