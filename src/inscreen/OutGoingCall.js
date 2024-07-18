import React from "react";
import { View, ImageBackground, Text, TouchableOpacity, Image } from "react-native";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from "../outgoing/Styles";
import ScreenIcon from "../json/ScreenIcons";
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';

export default class OutGoingcall extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dialpad: ''
        }
    }
    dial = (value) => {
        this.setState({ dialpad: this.state.dialpad + value });
    }
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.container}
                    source={
                        item.bg ?
                            {
                                uri: item.template
                            } :
                            require("../../assets/screen/bg1.png")

                    }>

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
                            <TouchableOpacity onPress={() => this.dial(1)}>
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
                            <TouchableOpacity onPress={() => this.props.onPress('accept')}>
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
                            <Ionicons
                                name="ios-timer"
                                size={ResWidth(8)}
                                color="lightgray"
                                style={styles.rupeeicon} />
                            <Text style={styles.text}>Recents</Text>
                        </View>
                        <View style={styles.icon}>
                            <FontAwesome
                                name="user-circle-o"
                                size={ResWidth(8)}
                                color="lightgray"
                                style={styles.rupeeicon} />
                            <Text style={styles.text}>Contacts</Text>
                        </View>
                        <View style={styles.icon}>
                            <Ionicons name="ios-keypad"
                                size={ResWidth(8)}
                                color="#3BB8F6"
                                style={styles.rupeeicon} />
                            <Text style={styles.text}>Keypad</Text>
                        </View>
                        <View style={styles.icon}>
                            <Ionicons
                                name="ios-mail"
                                size={ResWidth(8)}
                                color="lightgray"
                                style={styles.rupeeicon} />
                            <Text style={styles.text}>Voice @</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}

