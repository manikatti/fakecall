import React from "react";
import {
    TouchableOpacity,
    View,  
    Text
} from "react-native";
import Styles from "./Styles";
import Modal from "react-native-modal";
import { ResWidth, ResHeight } from "../utilis"
import { TextInput } from "react-native-paper";
import { Dropdown } from 'react-native-material-dropdown';
import { FontFormat, Fontvalue } from "../tempdata";
import { ColorPicker } from 'react-native-color-picker';

const TextChangeModel = (props) => {

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            style={Styles.model}>
            <View style={Styles.viewmodel}>
                <TextInput
                    style={Styles.edittext}
                    label={props.label === "name" ? "Enter name" : props.label === "mobile" ? "Enter Mobile no" : props.label === "time" ? "Enter Time" : ""}
                    mode="outlined"
                    value={props.text}
                    onChangeText={text => props.onChangeTextEdit(text)} />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: ResWidth(80)
                }}>
                    <Dropdown
                        containerStyle={Styles.fontpicker}
                        label='Font Size'
                        dropdownOffset={{ top: 6 }}
                        selectedItemColor='green'
                        itemColor='black'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        onChangeText={(value, index, data) => props.onChangeTextFont(value)}
                        data={Fontvalue}
                        value={props.font}
                        pickerStyle={{
                            marginTop: ResHeight(12),
                            marginLeft: ResWidth(8),
                            width: ResWidth(100) * 0.3
                        }} />
                    <View style={{ flex: 0.2 }} />
                    <Dropdown
                        containerStyle={Styles.fontpicker1}
                        dropdownOffset={{ top: 6 }}
                        selectedItemColor='green'
                        itemColor='black'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        //label='Enter Font Format'
                        onChangeText={(value, index, data) => props.onChangeTextFormat(value)}
                        data={FontFormat}
                        value={props.format}
                        pickerStyle={{
                            marginTop: ResHeight(7),
                            width: ResWidth(100) * 0.5,
                            marginLeft: ResWidth(46)
                        }} />
                </View>
                <View style={Styles.Viewcolor}>
                    <ColorPicker
                        style={Styles.ColorPicker}
                        onColorSelected={color => props.onColorSelected(color)} />
                    <View style={{
                        width: ResWidth(15),
                        height: ResWidth(15),
                        borderRadius: ResWidth(50) / 2,
                        backgroundColor: props.color
                    }}>
                    </View>
                </View>
                <View>
                </View>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'green',
                        padding: 10,
                        borderRadius: 8
                    }}
                    onPress={props.onPress} >
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 20
                    }}>Apply</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
export default TextChangeModel;