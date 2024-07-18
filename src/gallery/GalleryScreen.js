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
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";
import ScreenIcon from "../json/ScreenIcons";

class GalleryScreen extends Base {

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
                    style={styles.bg}
                    source={
                        this.state.bg ?
                            {
                                uri: this.state.template
                            } :
                            require("../../assets/screen/bg1.png")

                    }
                >

                    <View style={{ flex: 0.1, flexDirection: "row" }}>
                        <View style={{ marginLeft: ResWidth(43) }}>
                            <Text style={{ color: 'lightgray', fontSize: 12, fontWeight: 'bold' }}>06.00 A.M</Text>
                        </View>
                        <View style={{ marginLeft: ResWidth(37) }}>
                            <Ionicons name="ios-battery-charging" size={18} color="lightgray" />
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/facetime.png')} />
                                    <Text style={styles.alphabets}>Facetime</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/calender.png')} />
                                    <Text style={styles.alphabets}>Calender</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/photos.png')} />
                                    <Text style={styles.alphabets}>Photos</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/camera.png')} />
                                    <Text style={styles.alphabets}>Camera</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/mail.png')} />
                                    <Text style={styles.alphabets}>Mail</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/clock.png')} />
                                    <Text style={styles.alphabets}>Clock</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/maps.png')} />
                                    <Text style={styles.alphabets}>Maps</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/whether.png')} />
                                    <Text style={styles.alphabets}>Whether</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/crome.png')} />
                                    <Text style={styles.alphabets}>Chrome</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/itune.png')} />
                                    <Text style={styles.alphabets}>iTune</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/ibook.png')} />
                                    <Text style={styles.alphabets}>Ibook</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/settings.png')} />
                                    <Text style={styles.alphabets}>Settings</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/appstore.png')} />
                                    <Text style={styles.alphabets}>Appstore</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/calculator.png')} />
                                    <Text style={styles.alphabets}>Calculator</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/message.png')} />
                                    <Text style={styles.alphabets}>Message</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/voice.png')} />
                                    <Text style={styles.alphabets}>Voice</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/compess.png')} />
                                    <Text style={styles.alphabets}>Compess</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/wallet.png')} />
                                    <Text style={styles.alphabets}>Wallet</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/health.png')} />
                                    <Text style={styles.alphabets}>Health</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/applenews.png')} />
                                    <Text style={styles.alphabets}>Applenews</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.bottomview}>
                            <TouchableOpacity onPress={() => this.openLayer('accept')}>
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/dial.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/compess.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.openLayer('cancel')}>
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/message.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/itune.png')} />
                                </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(GalleryScreen);