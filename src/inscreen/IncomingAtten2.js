import React, { Component } from "react";
import {
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

class AttendSecond extends React.Component {



    render() {
        const { item, timer } = this.props;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
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
                                    {/* <Ionicons name="ios-battery-charging" size={18} color="#fff" /> */}
                                </View>
                            </View>
                            <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                <View >
                                    <Text style={{ fontSize: parseInt(item.nf), color: item.nc, fontFamily: item.nfor }}>{item.name}</Text>
                                    <Text style={Styles.mobiles}>{timer}</Text>
                                </View>
                                <View style={Styles.imageborder}>
                                    {
                                        item.profile === '' ?
                                            <Image
                                                style={Styles.profileImage}
                                                source={require("../../assets/img/profile.png")} /> :
                                            <Image
                                                style={Styles.profileImage}
                                                source={{ uri: 'file://' + item.profile }} />
                                    }
                                </View>
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
            </KeyboardAwareScrollView>
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
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E433B'
    },
    image: {
        width: ResWidth(23),
        height: ResHeight(13)
    },
    profileImage: {
        width: ResWidth(24),
        borderRadius: ResWidth(24),
        height: ResWidth(24)
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


});
export default AttendSecond;