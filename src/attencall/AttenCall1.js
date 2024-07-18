import React from "react";
import Base from "../base";
import { Image, ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icons from "../json/ScreenIcons";
import Styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { INCOMING, CLEAR } from "../Redux/Action";
import { connect } from 'react-redux';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";

class AttenCall1 extends Base {


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
                            require("../../assets/screen/bg1.png")

                    }
                    style={Styles.container}>

                    <View style={{ flex: 1 }}>

                        <View
                            style={Styles.firstContent}>
                            <View
                                style={Styles.statusbar}>
                                <TouchableOpacity
                                    style={Styles.statusicon}>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.editModal("time")}
                                    style={Styles.statusicon}>
                                    <Text
                                        style={{
                                            fontSize: parseInt(this.state.tf),
                                            fontFamily: this.state.tfor,
                                            color: this.state.tc
                                        }}>{this.state.time}</Text>
                                </TouchableOpacity>
                                <View
                                    style={Styles.statusicon}>

                                    <TouchableOpacity
                                    // onPress={this.BatteryIcon}
                                    >
                                        <View
                                            style={{ marginLeft: ResWidth(1) }}>
                                            {/* {this.BatteryPower()} */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 0.8,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <TouchableOpacity
                                    onPress={() => this.editModal("name")}>
                                    <Text
                                        style={{
                                            fontSize: parseInt(this.state.nf),
                                            color: this.state.nc,
                                            fontFamily: this.state.nfor
                                        }}>{this.state.name}</Text>
                                </TouchableOpacity >
                            </View>
                        </View>
                        <View style={Styles.secondtContent}>
                            <View style={Styles.secondSub}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Ionicons
                                            name="ios-mic-off"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>mute</Text>
                                </View>

                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Ionicons
                                            name="ios-keypad"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>Keypad</Text>
                                </View>

                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Ionicons
                                            name="ios-mic-off"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>audio</Text>
                                </View>
                            </View>
                            <View style={Styles.secondSub}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Feather
                                            name="plus"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>mute</Text>
                                </View>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Ionicons
                                            name="ios-videocam"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>Keypad</Text>
                                </View>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <View style={Styles.circle}>
                                        <Ionicons
                                            name="ios-contact"
                                            size={35}
                                            color="#fff" />
                                    </View>
                                    <Text style={Styles.text}>audio</Text>
                                </View>
                            </View>
                        </View>
                        <View
                            style={Styles.thirdContent}>
                            <TouchableOpacity
                                onPress={() => this.openLayer("cancel")}>
                                <Image
                                    style={Styles.image}
                                    source={require('../../assets/img/cancel.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Model View */}
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
export default connect(mapStateToProps, mapDispatchToProps)(AttenCall1);