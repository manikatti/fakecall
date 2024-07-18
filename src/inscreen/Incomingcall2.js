import React, { Component } from "react"
import { ImageBackground, View, TouchableOpacity, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from "../incoming/Styles";


class Incomingcall2 extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        const { item } = this.props;
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
                    <View style={Styles.statusbar}>
                        <TouchableOpacity style={Styles.statusicon}>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.statusicon}>
                            <Text style={{ fontSize: parseInt(item.tf), fontFamily: item.tfor, color: item.tc }}>{item.time}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.statusicon}>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.topView}>
                        <View style={Styles.profileview}>
                            <TouchableOpacity
                                onPress={() => this.toggleModal("name")}>
                                <Text
                                    style={{
                                        fontSize: parseInt(item.nf),
                                        color: item.nc,
                                        fontFamily: item.nfor
                                    }}>{item.name}</Text>
                            </TouchableOpacity >
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
                    <View style={Styles.bottomView}>
                        <TouchableOpacity
                            style={Styles.callbtn}
                            onPress={() => this.props.onPress('cancel')}>

                            <Image
                                resizeMode="contain"
                                style={Styles.callimage}
                                source={require('../../assets/img/cancel.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.callbtn}
                            onPress={() => this.props.onPress('accept')}>
                            <Image
                                resizeMode="contain"
                                style={Styles.callimage}
                                source={require('../../assets/img/accept.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

            </KeyboardAwareScrollView>
        )
    }
}
export default Incomingcall2