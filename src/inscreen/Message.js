import React from 'react';
import { View, ImageBackground, Text, Image, FlatList, TextInput, TouchableOpacity } from "react-native";
import Styles from "../message/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import Realm from 'realm';
let realm;
import Svg, {
    Path,
    TSpan
} from 'react-native-svg';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
class Message extends React.Component {

    constructor(props) {
        super(props);
        realm = new Realm({ path: 'Scenedb.realm' });
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        let hondas = realm.objects('Sms').filtered('scenename = $0', this.props.count.scenename);
        this.setState({ data: hondas });
    }


    GetFlatListCategory = (item) => {

        if (item.status == 0) {
            return (
                <TouchableOpacity >
                    <View style={[Styles.item, Styles.itemIn]}>
                        <View style={[Styles.balloon, { backgroundColor: '#E6E5EB' }]}>
                            <Text style={{ paddingTop: 5, color: '#000' }}>
                                {item.message}
                            </Text>

                            <View
                                style={[
                                    Styles.arrowContainer,
                                    Styles.arrowLeftContainer,
                                ]}
                            >
                                <Svg style={Styles.arrowLeft}
                                    width={moderateScale(10, 2)}
                                    height={moderateScale(17.5, 0.6)}
                                    viewBox="32.484 17.5 15.515 17.5"
                                    enable-background="new 32.485 17.5 15.515 17.5">
                                    <Path
                                        d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                                        fill="#E6E5EB"
                                        x="0"
                                        y="0"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else if (item.status == 1) {
            return (
                <TouchableOpacity >
                    <View style={[Styles.item, Styles.itemOut]}>
                        <View style={[Styles.balloon, { backgroundColor: '#007AFF' }]}>
                            <Text style={{ paddingTop: 5, color: 'white' }}>{item.message}</Text>
                            <View
                                style={[
                                    Styles.arrowContainer,
                                    Styles.arrowRightContainer,
                                ]}
                            >
                                <Svg style={Styles.arrowRight}
                                    width={moderateScale(10, 2)}
                                    height={moderateScale(17.5, 0.6)}
                                    viewBox="32.485 17.5 15.515 17.5"
                                    enable-background="new 32.485 17.5 15.515 17.5">
                                    <Path
                                        d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                                        fill="#007AFF"
                                        x="0"
                                        y="0"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity >
                    <View style={{ alignItems: 'center' }}>
                        <Text>{item.timestamp}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}>
                <View style={Styles.container}>
                    <View style={Styles.firstContent}>
                        <View style={{ flex: 0.2, flexDirection: "row", }}>
                            <View style={{ marginLeft: ResWidth(43) }}>
                                <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>06.00 A.M</Text>
                            </View>
                            <View style={{ marginLeft: ResWidth(37) }}>
                                <Ionicons name="ios-battery-charging" size={18} color="#000" />
                            </View>
                        </View>


                        <View style={{ flex: 1.3, flexDirection: 'row' }}>
                            <View style={{ marginLeft: ResWidth(3) }}>
                                <Ionicons name="ios-arrow-back" size={35} color="#31BAFD" />
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: ResWidth(38) }}>
                                <View >
                                    <Image
                                        style={Styles.image}
                                        source={require('../../assets/img/profile.png')} />
                                </View>
                                <View>
                                    <Text style={{ color: '#000' }}>Alex</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.secondContent}>
                        <FlatList
                            keyboardShouldPersistTaps='always'
                            ref={(ref) => { this.list = ref; }}
                            contentContainerStyle={{ backgroundColor: 'white', justifyContent: 'flex-end', flexGrow: 1 }}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item, index }) => this.GetFlatListCategory(item, index)} />
                    </View>
                    <View style={Styles.thirdContent}>
                        <View style={{ marginLeft: ResWidth(4), marginRight: ResWidth(4) }}>
                            <Ionicons name="ios-camera" size={50} color="lightgray" />
                        </View>
                        <View>
                            <MaterialCommunityIcons name="format-text-variant" size={50} color="lightgray" />
                        </View>
                        <View style={Styles.textInput}>
                            <View>
                                <TextInput
                                    //value={this.state.msg}
                                    style={Styles.edit_text1}
                                    placeholder='Text Message'
                                    editable={false}
                                //onChangeText={(text) => this.outGoing(text)}
                                />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity
                                //onPress={() => this.sendMessage()}
                                >
                                    <FontAwesome5 name="arrow-circle-up" size={35} color="green" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.Red1.count,
    }
}
export default connect(mapStateToProps, null)(Message);
