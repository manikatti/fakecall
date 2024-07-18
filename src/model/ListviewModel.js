import React from "react";
import {
    View,
    TouchableOpacity,
    FlatList,
    Text,
    Image
} from "react-native";
import Styles from "./Styles";
import Modal from "react-native-modal";
import { ResWidth } from "../utilis";
import ListIcon from "../json/ListIcon";

const itemView = (item, props) => {
    return (
        <TouchableOpacity
            onPress={() => props.itemSelected(item)}
            style={Styles.item}>
            <Image
                resizeMode="contain"
                source={ListIcon[item.template]}
                style={Styles.screen} />
            <Text style={Styles.phonename}>{item.tempname}</Text>
        </TouchableOpacity>
    );
}


const ListviewModel = (props) => {

    return (
        <Modal
            onModalHide={props.onModalHide}
            isVisible={props.isVisible}
            onBackdropPress={props.onBackdropPress}
            style={Styles.model1}>
            <View style={Styles.listviewmodel}>
                <Text style={{
                    marginLeft: ResWidth(8),
                    fontWeight: 'bold'
                }}>Select Template</Text>
                <FlatList
                    data={props.data}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => itemView(item, props)}
                    keyExtractor={item => item.id} />
            </View>
        </Modal>
    )

}

export default ListviewModel;