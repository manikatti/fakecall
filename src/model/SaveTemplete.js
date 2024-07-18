import React from "react";
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./Styles";
import { TextInput } from "react-native-paper";

const SaveTemplete = (props) => {

    return (
        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            style={Styles.model1}>
            <View style={Styles.templateModal}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Save</Text>
                <Text>Please Name Your Template</Text>
                <TextInput
                    style={Styles.saveEdit}
                    mode="outlined"
                    onChangeText={props.onChangeText} />
                <View style={Styles.alertView}>
                    <TouchableOpacity
                        onPress={props.onPressSave}>
                        <Text style={{ color: '#007ED0' }}>Save</Text>
                    </TouchableOpacity >
                    <TouchableOpacity
                        onPress={props.onPressCancel}>
                        <Text style={{ color: '#007ED0' }}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
export default SaveTemplete;