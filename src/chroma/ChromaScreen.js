import * as React from 'react';
import { ColorPicker } from 'react-native-color-picker'
import { connect } from 'react-redux';
import { INCOMING, CLEAR } from "../Redux/Action";
import Icons from '../json/ScreenIcons';
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";
import {
    View,
    Image,
    Text,
    Switch,
    TouchableOpacity
} from 'react-native';
import { ResWidth } from "../utilis";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Base from "../base";
import styles from "./styles";

class ChromaScreen extends Base {

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

    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
        this.changeImage("plus_img");
    }
    changeImage = (index) => {
        this.setState({ chromaicon: index });
        this.setState({
            flagImage: index
        });

    }

    handleColorChange = (color) => {
        this.setState({ chromacolor: color });
        this.setState({ background: color });
        this.setState({ colorView: false });
    }
    Picker = () => {
        this.setState({ colorView: true });
    }

    render() {

        const { label, text, font, format, color,
            isEditVisible,
            isListVisible,
            isTimerVisible,
            isSaveVisible,
            selectTimer,
            distance,
            scenename,
            flagImage
        } = this.state;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <View style={[styles.container, { backgroundColor: this.state.background }]}>
                    <View style={styles.menu}>
                        <View style={styles.container1}>
                            <Text style={styles.btn_text}>
                                Color Palette
                         </Text>
                            <TouchableOpacity onPress={this.Picker}>
                                <View
                                    style={[styles.btn, { backgroundColor: this.state.background }]}>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container1}>
                            <Text
                                style={styles.btn_text}>Tracking Markers</Text>
                            <Switch
                                style={styles.btn2}
                                onValueChange={this.toggleSwitch}
                                value={this.state.switchValue} />
                        </View>
                        <View style={styles.container1}>
                            {
                                this.state.switchValue ?
                                    <View style={styles.container2}>
                                        <TouchableOpacity onPress={() => this.changeImage("plus_img")}>
                                            <Image style={styles.image} source={require("../../assets/img/plus.png")} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.changeImage("triangle_img")}>
                                            <Image style={styles.image} source={require("../../assets/img/triangle.png")} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.changeImage("circle_img")}>
                                            <Image style={styles.image} source={require("../../assets/img/circle.png")} />
                                        </TouchableOpacity>
                                    </View> : null
                            }
                        </View>
                    </View>
                    {
                        this.state.colorView ?
                            <View style={styles.colorPicker2} >
                                <ColorPicker
                                    style={styles.colorPicker}
                                    onColorSelected={(color) => this.handleColorChange(color)} />

                            </View> : null
                    }
                    <Image style={styles.corner1} source={Icons[flagImage]} />
                    <Image style={styles.corner2} source={Icons[flagImage]} />
                    <View style={styles.center}>
                        <Image style={{
                            margin: ResWidth(3),
                            width: ResWidth(6),
                            height: ResWidth(6),
                        }} source={Icons[flagImage]} />
                    </View>
                    <Image style={styles.corner3} source={Icons[flagImage]} />
                    <Image style={styles.corner4} source={Icons[flagImage]} />
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
                        onAdd={this.onSave}
                        style={styles.touch} />
                </View>
            </KeyboardAwareScrollView>
        );
    }

    handleColorChange = (color) => {
        this.setState({ chromacolor: color });
        this.setState({ background: color });
        this.setState({ colorView: false });
    }
}


const mapStateToProps = (state) => {
    return {
        screen1: state.Red1.screen1,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addScreen: (item) => (dispatch({ type: INCOMING, payload: item })),
    clear: () => (dispatch({ type: CLEAR }))
});
export default connect(mapStateToProps, mapDispatchToProps)(ChromaScreen);


