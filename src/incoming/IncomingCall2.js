import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import {
    ImageBackground,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Base from "../base";
import Styles from "./Styles";
import { INCOMING, CLEAR } from "../Redux/Action";
import { connect } from 'react-redux';
import Icons from "../json/ScreenIcons";
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";

import { dirPicutures } from '../utilis/dirStorage';
import moment from "moment";
import RNFS from "react-native-fs";


class IncomingCall2 extends Base {



    UNSAFE_componentWillMount() {
        this.it = this.props.navigation.getParam('item', 'default');

        this.setState({ tempname: this.it.tempname });
        this.setState({ template: this.it.template });
        this.setState({ name: this.it.name });
        this.setState({ nf: this.it.nf });
        this.setState({ nc: this.it.nc });
        this.setState({ nfor: this.it.nfor });
        this.setState({ time: this.it.time });
        this.setState({ tf: this.it.tf });
        this.setState({ tc: this.it.tc });
        this.setState({ tfor: this.it.tfor });
        this.setState({ profile: this.it.profile });
        this.setState({ screen: this.it.screen });
        this.setState({ action: this.it.action });
        this.setState({ actionValue: this.it.actionValue });
        this.setState({ scenename: this.it.scenename });
        this.setState({ chromaicon: this.it.chromaicon });
        this.setState({ chromacolor: this.it.chromacolor });
        this.setState({ bg: this.it.bg });
    }


    onProfile = () => {
        // Open Image Library:
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.saveImage(response.path);
            }
        });
    }

    saveImage = async filePath => {
        try {
            // set new image name and filepath
            const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.png`;
            const newFilepath = `${dirPicutures}/${newImageName}`;
            // move and save image to new filepath
            const image = await moveAttachment(filePath, newFilepath);

            this.setState({ profile: image });
            console.log(image);

        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const { label, text, font, format, color,
            isEditVisible,
            isListVisible,
            isTimerVisible,
            isSaveVisible,
            selectTimer,
            distance,
            scenename
        } = this.state;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <ImageBackground
                    source={
                        this.state.bg ?
                            {
                                uri: this.state.template
                            } :
                            require("../../assets/screen/bg2.png")

                    }
                    style={Styles.container}>
                   
                    <View style={Styles.statusbar}>
                        <TouchableOpacity
                            style={Styles.statusicon}>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.editModal("time")}
                            style={Styles.statusicon}>
                            <Text style={{
                                fontSize: parseInt(this.state.tf),
                                fontFamily: this.state.tfor,
                                color: this.state.tc
                            }}>{this.state.time}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.statusicon}>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={Styles.topView}>
                        <View
                            style={Styles.profileview}>
                            <TouchableOpacity
                                onPress={() => this.editModal("name")}>
                                <Text
                                    style={{
                                        fontSize: parseInt(this.state.nf),
                                        color: this.state.nc,
                                        fontFamily: this.state.nfor
                                    }}>{this.state.name}</Text>
                            </TouchableOpacity >


                            <TouchableOpacity onPress={this.onProfile}>
                                <View style={Styles.imageborder}>
                                    {
                                        this.state.profile === '' ?
                                            <Image
                                                style={Styles.profileImage}
                                                source={require("../../assets/img/profile.png")} /> :
                                            <Image
                                                style={Styles.profileImage}
                                                source={{ uri: 'file://' + this.state.profile }} />
                                    }
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View
                        style={Styles.bottomView}>
                        <TouchableOpacity
                            onPress={() => this.openLayer("cancel")}
                            style={Styles.callbtn}>
                            <Image
                                resizeMode="contain"
                                style={Styles.callimage}
                                source={require('../../assets/img/cancel.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={Styles.callbtn}
                            onPress={() => this.openLayer("accept")}>
                            <Image
                                resizeMode="contain"
                                style={Styles.callimage}
                                source={require('../../assets/img/accept.png')} />
                        </TouchableOpacity>
                    </View>
                    <TextChangeModel
                        onBackdropPress={() => this.setState({ isEditVisible: false })}
                        isVisible={isEditVisible}
                        label={label}
                        text={text}
                        font={font}
                        format={format}
                        color={color}
                        onChangeTextEdit={(text) => this.setState({ text: text })}
                        onChangeTextFont={(value) => this.setState({ font: value })}
                        onChangeTextFormat={(value) => this.setState({ format: value })}
                        onColorSelected={(color) => this.setState({ color: color })}
                        onPress={this.CloseModal} />

                    <ListviewModel
                        onBackdropPress={() => this.setState({ isListVisible: false })}
                        onModalHide={() => this.setState({ isTimerVisible: true })}
                        isVisible={isListVisible}
                        data={this.alldata}
                        itemSelected={(item) => this.selectScreen(item)}
                    />

                    <TouchModel
                        isVisible={isTimerVisible}
                        onBackdropPress={() => this.setState({ isTimerVisible: false })}
                        onPressRadio={(value) => this.setState({ selectTimer: value })}
                        selectTimer={selectTimer}
                        onPress={this.nextScreen}
                        onValueChange={val => this.setState({ distance: val })}
                        value={distance}
                    />
                    <SaveTemplete
                        isVisible={isSaveVisible}
                        onBackdropPress={() => this.setState({ isSaveVisible: false })}
                        onChangeText={(t) => this.setState({ scenename: t })}
                        onPressSave={this.saveScreen}
                        onPressCancel={this.cancelTemplete}
                    />
                     <Menu
                        navigation={this.goBack}
                        onSave={this.saveLocalTemplete}
                        onPreview={this.previewScreen}
                        onAdd={this.backgroundImg}
                        style={Styles.touch} />

                </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        screen1: state.Red1.screen1
    }
}

const mapDispatchToProps = (dispatch) => ({
    addScreen: (item) => (dispatch({ type: INCOMING, payload: item })),
    clear: () => (dispatch({ type: CLEAR }))
});


const moveAttachment = async (filePath, newFilepath) => {
    return new Promise((resolve, reject) => {
        RNFS.mkdir(dirPicutures)
            .then(() => {
                RNFS.readFile(filePath, "base64").then((res) => {
                    RNFS.writeFile(newFilepath, res, 'base64')
                        .then((success) => {
                            console.log('FILE WRITTEN!');
                            resolve(newFilepath);
                        })
                        .catch((error) => {
                            alert(JSON.stringify(error));
                        });
                }).catch((err) => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log('mkdir error', err);
                reject(err);
            });
    });
};
export default connect(mapStateToProps, mapDispatchToProps)(IncomingCall2);