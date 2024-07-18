import Modal from "react-native-modal";
import React from "react";
import {
    TouchableOpacity,
    View,
    Text
} from "react-native";
import Styles from "./Styles"
import RadioForm from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";

const radio_props = [
    { label: 'Trigger by Touch', value: false },
    { label: 'Trigger by Timer', value: true }
];

const Touchmodel = (props) => {

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            style={Styles.timerModel}>
            <View style={Styles.timerModelView}>
                <View style={Styles.titleView}>
                    <Text style={Styles.title} >Trigger Mode</Text>
                </View>
                <View style={Styles.bodyView}>
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => props.onPressRadio(value)} />
                    {
                        props.selectTimer ?
                            <View style={{
                                width: ResWidth(80),
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: "center"
                            }}>
                                <Slider
                                    style={Styles.Slider}
                                    minimumValue={1}
                                    maximumValue={10}
                                    step={1}
                                    value={props.value}
                                    onValueChange={val => props.onValueChange(val)}
                                    minimumTrackTintColor="red"
                                    maximumTrackTintColor="#000000" />
                                <View style={Styles.text}>
                                    <Text
                                        style={{ fontSize: ResFontSizes(1.8) }}
                                    >{props.value} sec</Text>
                                </View>
                            </View> : null
                    }
                </View>
                <View style={Styles.titleView}>
                    <TouchableOpacity
                        style={Styles.btnview}
                        onPress={props.onPress}>
                        <Text style={Styles.btn}>Play</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default Touchmodel;