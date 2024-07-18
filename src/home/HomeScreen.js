import * as React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import Styles from "./Styles";
import Realm from 'realm';
let realm;

import Database from "../database/Database";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const db = new Database();

class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        db.createTable();
    }


    UNSAFE_componentWillMount() {
        db.updateTempValue();
    }

    navigator = () => {
        this.props.navigation.navigate('dashboard');
    }

    onPlayer = () => {
        this.props.navigation.navigate('playlist');
    }
    onChroma = () => {
        this.props.navigation.navigate('chroma', { screen: true });
    }

    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <ImageBackground
                    resizeMode="cover"
                    source={require("../../assets/img/homebg.png")}
                    style={Styles.full}>
                    <View style={Styles.view1}>
                        <Image style={Styles.logoIcon}
                            source={require("../../assets/img/logo.png")} />
                    </View>
                    <View style={Styles.view2}>
                        <View style={Styles.viewrow}>
                            <TouchableOpacity onPress={this.navigator}
                                style={Styles.viewcolumn}>
                                <Image resizeMode="contain"
                                    style={Styles.icon}
                                    source={require("../../assets/img/emulator.png")} />
                                <Text style={Styles.btntext}>{"Emulator"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.onPlayer}
                                style={Styles.viewcolumn}>
                                <Image resizeMode="contain" style={Styles.icon}
                                    source={require("../../assets/img/player.png")} />
                                <Text style={Styles.btntext}>{"Player"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.viewrow}>
                            <TouchableOpacity style={Styles.viewcolumn} onPress={this.onChroma}>
                                <Image resizeMode="contain" style={Styles.icon}
                                    source={require("../../assets/img/chroma.png")} />
                                <Text style={Styles.btntext}>{"Chroma"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.viewcolumn}>
                                <Image resizeMode="contain" style={Styles.icon}
                                    source={require("../../assets/img/setting.png")} />
                                <Text style={Styles.btntext}>{"Settings"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAwareScrollView>
        );
    }


}

export default HomeScreen;