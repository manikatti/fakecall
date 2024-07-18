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
import Icons from "../json/ScreenIcons";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";

class Outgoing1 extends Base {

    UNSAFE_componentWillMount() {
        this.it = this.props.navigation.getParam('item', 'default');
        console.log(JSON.stringify(this.it))
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

    dial = (value) => {
        this.setState({ dialpad: this.state.dialpad + value });
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
                    <View style={{
                        flex: 0.1,
                        flexDirection: "row"
                    }}>
                        <View style={{ marginLeft: ResWidth(43) }}>
                            <Text style={{
                                color: 'lightgray',
                                fontSize: 12,
                                fontWeight: 'bold'
                            }}>06.00 A.M</Text>
                        </View>
                        <View style={{
                            marginLeft: ResWidth(37)
                        }}>
                            <Ionicons
                                name="ios-battery-charging"
                                size={18}
                                color="lightgray" />
                        </View>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.edit_text}
                            numberOfLines={1} >{this.state.dialpad}</Text>
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.textview2}>
                            <TouchableOpacity
                                onPress={() => this.dial(1)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number} >1</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(2)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>2</Text>
                                    <Text style={styles.alphabets}>ABC</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(3)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>3</Text>
                                    <Text style={styles.alphabets}>DEF</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.textview2}>
                            <TouchableOpacity onPress={() => this.dial(4)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>4</Text>
                                    <Text style={styles.alphabets}>GHI</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(5)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>5</Text>
                                    <Text style={styles.alphabets}>JKL</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(6)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>6</Text>
                                    <Text style={styles.alphabets}>MNO</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity onPress={() => this.dial(7)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>7</Text>
                                    <Text style={styles.alphabets}>PQRS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(8)}>
                                <View style={styles.circle}>
                                    <Text style={styles.number}>8</Text>
                                    <Text style={styles.alphabets}>TUV</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(9)}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>9</Text>
                                    <Text style={styles.alphabets}>WXYZ</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity onPress={() => this.dial('*')}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>*</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial(0)}>
                                <View style={styles.circle}>
                                    <Text style={styles.number}>0</Text>
                                    <Text style={styles.alphabets}>+</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.dial('#')}>
                                <View style={styles.circle} >
                                    <Text style={styles.number}>#</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview3}>
                            <TouchableOpacity onPress={() => this.openLayer("dial")}>
                                <Image style={styles.dial}
                                    source={require('../../assets/img/accept.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.icon}>
                            <EvilIcons name="star"
                                size={ResWidth(8)}
                                color="lightgray"
                                style={styles.rupeeicon} />
                            <Text style={styles.text}>Favourite</Text>
                        </View>
                        <View style={styles.icon}>
                            <MaterialIcons
                                name="access-time"
                                size={ResWidth(8)}
                                color="lightgray"
                            />
                            <Text style={styles.text}>Recents</Text>
                        </View>
                        <View style={styles.icon}>
                            <FontAwesome
                                name="user-circle-o"
                                size={ResWidth(8)}
                                color="lightgray"
                            />
                            <Text style={styles.text}>Contacts</Text>
                        </View>
                        <View style={styles.icon}>
                            <Ionicons name="ios-keypad"
                                size={ResWidth(8)} color="#3BB8F6"
                            />
                            <Text style={styles.text}>Keypad</Text>
                        </View>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons
                                name="voicemail"
                                size={ResWidth(8)}
                                color="lightgray"
                            />
                            <Text style={styles.text}>Voice @</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Outgoing1);