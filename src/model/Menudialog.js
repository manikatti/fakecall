import React from "react";
import {
    View,
    TouchableOpacity
} from "react-native";
import Styles from "../utilis/Styles";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Fontisto from "react-native-vector-icons/Fontisto";


const Menudialog = (props) => {
    return (
        <View style={props.style}>
            <View style={Styles.menu1}>
                <View style={{ flex: 4.9, flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        flex: 4.9,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}W
                        onPress={props.navigation}>
                        <FontAwesome5 name="arrow-left" size={25} color="#007ED0" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.2, backgroundColor: '#007ED0' }} />
                    <TouchableOpacity
                     onPress={props.onNext}
                        style={{
                            flex: 4.9,
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <FontAwesome5 name="arrow-right" size={25} color="#007ED0" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.2, backgroundColor: '#007ED0' }} />
                <View style={{ flexDirection: 'row', flex: 4.9 }}>
                    <TouchableOpacity style={{
                        flex: 3.2,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={props.onSave}>
                        <FontAwesome5 name="save" size={25} color="#000000" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.2, backgroundColor: '#007ED0' }} />
                    <TouchableOpacity style={{
                        flex: 3.2,
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onPress={props.onPreview}>
                        <Fontisto name="preview" size={25} color="#000000" />
                    </TouchableOpacity>
                    <View style={{ flex: 0.2, backgroundColor: '#007ED0' }} />
                    <TouchableOpacity
                        style={{
                            flex: 3.2,
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onPress={props.onAdd}>
                        <FontAwesome5 name="plus" size={20} color="#000000" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Menudialog;