import React from "react";
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native';
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';
import styles from '../gallery/Styles';
import ScreenIcon from "../json/ScreenIcons"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Gallery extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        const { item } = this.props;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <ImageBackground
                    style={styles.bg}
                    source={
                        item.bg ?
                            {
                                uri: item.template
                            } :
                            require("../../assets/screen/bg1.png")

                    }>
                    <View style={{ flex: 0.1, flexDirection: "row" }}>
                        <View style={{ marginLeft: ResWidth(43) }}>
                            <Text style={{ color: 'lightgray', fontSize: 12, fontWeight: 'bold' }}>06.00 A.M</Text>
                        </View>
                        <View style={{ marginLeft: ResWidth(37) }}>

                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/facetime.png')} />
                                    <Text style={styles.alphabets}>Facetime</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/calender.png')} />
                                    <Text style={styles.alphabets}>Calender</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/photos.png')} />
                                    <Text style={styles.alphabets}>Photos</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/camera.png')} />
                                    <Text style={styles.alphabets}>Camera</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/mail.png')} />
                                    <Text style={styles.alphabets}>Mail</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/clock.png')} />
                                    <Text style={styles.alphabets}>Clock</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/maps.png')} />
                                    <Text style={styles.alphabets}>Maps</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/whether.png')} />
                                    <Text style={styles.alphabets}>Whether</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/crome.png')} />
                                    <Text style={styles.alphabets}>Chrome</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/itune.png')} />
                                    <Text style={styles.alphabets}>iTune</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/ibook.png')} />
                                    <Text style={styles.alphabets}>Ibook</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/settings.png')} />
                                    <Text style={styles.alphabets}>Settings</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/appstore.png')} />
                                    <Text style={styles.alphabets}>Appstore</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/calculator.png')} />
                                    <Text style={styles.alphabets}>Calculator</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/message.png')} />
                                    <Text style={styles.alphabets}>Message</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/voice.png')} />
                                    <Text style={styles.alphabets}>Voice</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textview2}>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/compess.png')} />
                                    <Text style={styles.alphabets}>Compess</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/wallet.png')} />
                                    <Text style={styles.alphabets}>Wallet</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle}>
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/health.png')} />
                                    <Text style={styles.alphabets}>Health</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.dial}
                                        source={require('../../assets/icon/applenews.png')} />
                                    <Text style={styles.alphabets}>Applenews</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.bottomview}>
                            <TouchableOpacity onPress={() => this.props.onPress('accept')}>
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/dial.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/compess.png')} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.onPress('cancel')}>
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/message.png')} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <View style={styles.circle} >
                                    <Image style={styles.bottomdial}
                                        source={require('../../assets/icon/itune.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </KeyboardAwareScrollView>
        )
    }
}

export default Gallery;