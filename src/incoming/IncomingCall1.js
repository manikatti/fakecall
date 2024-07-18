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
import styles from "./Styles";
import { INCOMING, CLEAR } from "../Redux/Action";
import { connect } from 'react-redux';
import Icons from "../json/ScreenIcons";
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";

class IncomingCall1 extends Base {

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
                    style={styles.container}>
                    <View style={styles.statusbar}>
                        <TouchableOpacity
                            style={styles.statusicon}>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.editModal("time")}
                            style={styles.statusicon}>
                            <Text
                                style={{
                                    fontSize: parseInt(this.state.tf),
                                    fontFamily: this.state.tfor,
                                    color: this.state.tc
                                }}>{this.state.time}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.statusicon}>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.topView}>
                        <View
                            style={styles.profileview}>
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
                    <View style={styles.bottomView}>
                        <TouchableOpacity style={styles.callbtn}
                            onPress={() => this.openLayer("cancel")} >
                            <Image
                                resizeMode="contain"
                                style={styles.callimage}
                                source={require('../../assets/img/cancel.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.callbtn}
                            onPress={() => this.openLayer("accept")}>
                            <Image
                                resizeMode="contain"
                                style={styles.callimage}
                                source={require('../../assets/img/accept.png')} />
                        </TouchableOpacity>
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
                        style={styles.touch} />

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
export default connect(mapStateToProps, mapDispatchToProps)(IncomingCall1);