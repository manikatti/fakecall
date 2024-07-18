import React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    View,
    Image
} from "react-native";
import styles from "../chroma/styles";
import Icons from '../json/ScreenIcons';
import { ResWidth} from '../utilis';
class ChromaScreen extends React.Component {

    render() {
        const { item } = this.props;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <View style={[styles.container, { backgroundColor: item.chromacolor }]}>
                    <Image style={styles.corner1} source={Icons[item.chromaicon]} />
                    <Image style={styles.corner2} source={Icons[item.chromaicon]} />
                    <View style={styles.center}>
                        <Image style={{
                            margin: ResWidth(3),
                            width: ResWidth(6),
                            height: ResWidth(6),
                        }} source={Icons[item.chromaicon]} />
                    </View>
                    <Image style={styles.corner3} source={Icons[item.chromaicon]} />
                    <Image style={styles.corner4} source={Icons[item.chromaicon]} />
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

export default ChromaScreen;