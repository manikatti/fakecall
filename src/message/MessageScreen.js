import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import {

    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from "react-native";
import Base from "../base";
import Styles from "./Styles";
import { INCOMING, CLEAR } from "../Redux/Action";
import { connect } from 'react-redux';
import Svg, {
    Path,
    TSpan
} from 'react-native-svg';
import { StackActions, NavigationActions } from 'react-navigation';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import Modals, { ModalContent, ModalFooter, ModalButton } from 'react-native-modals';
import { TextInput } from "react-native-paper";
import RadioForm from 'react-native-simple-radio-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Menu, TextChangeModel, ListviewModel, TouchModel, SaveTemplete } from "../model";
let realm
class MessageScreen extends Base {


    constructor(props) {
        super(props);

        realm = new Realm({ path: 'Scenedb.realm' });
        this.alldata = realm.objects('Allscreen');
    }

    UNSAFE_componentWillMount() {
        this.it = this.props.navigation.getParam('item', 'default');
        this.setState({ tempname: this.it.tempname });
        this.setState({ template: this.it.template });
        this.setState({ name: this.it.name });
        this.setState({ nf: this.it.nf });
        this.setState({ nc: this.it.nc });
        this.setState({ nfor: this.it.nfor });
        this.setState({ time: this.it.time });
        this.setState({ tf: this.it.tf });
        this.setState({ tc: this.it.tc });
        this.setState({ tfor: this.it.tfor });
        this.setState({ profile: this.it.profile });
        this.setState({ screen: this.it.screen });
        this.setState({ action: this.it.action });
        this.setState({ actionValue: this.it.actionValue });
        this.setState({ scenename: this.it.scenename });
        this.setState({ chromaicon: this.it.chromaicon });
        this.setState({ chromacolor: this.it.chromacolor });
        this.setState({ bg: this.it.bg });
    }
    chooseAction = (id) => {
        this.setState({ editVisible: true, id: id });
    }

    openModal = (value) => {
        this.setState({ visible: !this.state.visible, editAction: value });
    }

    FlatListCategory = (item) => {

        if (item.status == 0) {
            return (
                <TouchableOpacity onLongPress={() => this.chooseAction(item.id)}>
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
                                    viewBox="32.484 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
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
                <TouchableOpacity onLongPress={() => this.chooseAction(item.id)}>
                    <View style={[Styles.item, Styles.itemOut]}>
                        <View style={[Styles.balloon, { backgroundColor: '#007AFF' }]}>
                            <Text style={{ paddingTop: 5, color: 'white' }}>{item.message}</Text>
                            <View
                                style={[
                                    Styles.arrowContainer,
                                    Styles.arrowRightContainer,
                                ]}
                            >
                                <Svg style={Styles.arrowRight} width={moderateScale(10, 2)} height={moderateScale(17.5, 0.6)} viewBox="32.485 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
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
                <TouchableOpacity onLongPress={() => this.chooseAction(item.id)}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>{item.timestamp}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
    onEditAction = (value) => {
        let filterValue = this.state.data.filter(row => row.id == this.state.id);
        this.setState({ editVisible: false, message: filterValue[0].message, visible: true, initial: filterValue[0].status, editAction: value });
    }

    onDeleteMessage = (id) => {
        let index = this.state.data.findIndex(x => x.id === this.state.id);
        if (index > -1) {
            this.state.data.splice(index, 1);
        }
        this.setState({ editVisible: false, status: 0 });
    }

    ok = () => {
        if (this.state.editAction == 0) {
            let index = this.state.data.findIndex(x => x.id === this.state.id);
            this.state.data[index].message = this.state.message;
            this.state.data[index].status = this.state.status;
        }
        else {
            if (this.state.status == 0) {
                let formatValue = {
                    "id": this.state.data.length + 1,
                    "message": this.state.message,
                    "status": this.state.status,
                    "timestamp": ""

                };
                this.state.data.push(formatValue);
            } else if (this.state.status == 1) {
                let formatValue = {
                    "id": this.state.data.length + 1,
                    "message": this.state.message,
                    "status": this.state.status,
                    "timestamp": ""
                };
                this.state.data.push(formatValue);
            }
            else {
                let formatValue = {
                    "id": data.length + 1,
                    "message": "",
                    "status": this.state.status,
                    "timestamp": this.state.message

                };
                this.state.data.push(formatValue);
            }
        }
        this.setState({ visible: !this.state.visible, status: 0, message: "" });
        setTimeout(() => this.list.scrollToEnd(), 200);
    }
    openTemplate = () => {
        const { name, nf, screen, nc, nfor,
            time, tc, tf, tfor, template, tempname,
            profile, action, actionValue, chromacolor, chromaicon, bg } = this.state;
        let req = {
            name: name,
            nf: nf,
            nc: nc,
            nfor: nfor,

            time: time,
            tf: tf,
            tc: tc,
            tfor: tfor,
            tempname: tempname,
            template: template,
            profile: profile,
            screen: screen,
            action: action,
            actionValue: actionValue,
            chromacolor: chromacolor,
            chromaicon: chromaicon,
            bg: bg

        }
        this.props.addScreen(req);
        this.setState({ isSaveVisible: true });
    }


    saveScreens = () => {
        if (this.state.scenename != "") {
            let temp = this.props.screen1;
            var I =
                realm.objects('Scene').sorted('_id', true).length > 0
                    ? realm.objects('Scene').sorted('_id', true)[0]
                        ._id + 1
                    : 1;

            realm.write(() => {
                realm.create('Scene', {
                    _id: I,
                    scenename: this.state.scenename
                });
            });

            temp.forEach((it, index) => {
                var ID =
                    realm.objects('SceneDetails').sorted('_id', true).length > 0
                        ? realm.objects('SceneDetails').sorted('_id', true)[0]
                            ._id + 1
                        : 1;
                let req = {
                    _id: ID,
                    name: it.name,
                    nf: it.nf,
                    nc: it.nc,
                    nfor: it.nfor,
                    time: it.time,
                    tf: it.tf,
                    tc: it.tc,
                    tfor: it.tfor,
                    tempname: it.tempname,
                    template: it.template,
                    scenename: this.state.scenename,
                    profile: it.profile,
                    screen: it.screen,
                    action: it.action,
                    actionValue: String(it.actionValue),
                    chromacolor: it.chromacolor,
                    chromaicon: it.chromaicon,
                    bg: it.bg
                }
                realm.write(() => {
                    realm.create('SceneDetails', req);
                });

            });

            if (this.state.data != []) {
                this.state.data.forEach((it, index) => {
                    realm.objects('Sms').sorted('user_id', true).length > 0
                        ? realm.objects('Sms').sorted('user_id', true)[0]
                            .user_id + 1
                        : 1;

                    let reqs = {
                        id: it.id,
                        message: it.message,
                        status: it.status,
                        timestamp: it.timestamp,
                        scenename: this.state.scenename,
                    }
                    realm.write(() => {
                        realm.create('Sms', reqs);
                    });
                });
            } else {

            }

            this.setState({ templateModal: false });
            this.props.clear();
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'home' })
                ],
            });
            this.props.navigation.dispatch(resetAction);
        }
        else {
            alert('Please enter Template Name');
        }
    }

    render() {

        const { label, text, font, format, color,
            isEditVisible,
            isListVisible,
            isTimerVisible,
            isSaveVisible,
            selectTimer,
            distance,
            scenename
        } = this.state;
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <View
                    style={Styles.container}>

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
                            contentContainerStyle={{
                                backgroundColor: 'white',
                                justifyContent: 'flex-end',
                                flexGrow: 1
                            }}
                            showsHorizontalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item, index }) => this.FlatListCategory(item, index)} />

                    </View>
                    <View style={Styles.thirdContent}>
                        <View style={{ marginLeft: ResWidth(4), marginRight: ResWidth(4) }}>
                            <Ionicons name="ios-camera"
                                size={50} color="gray" />
                        </View>
                        <View>
                            <MaterialCommunityIcons name="format-text-variant"
                                size={50} color="gray" />
                        </View>
                        <View style={Styles.textInput}>

                            <Text
                                //value={this.state.msg}
                                style={Styles.edit_text1}
                                placeholder='Text Message'
                                editable={false}

                            />

                            <View style={{ justifyContent: 'center' }}>
                                <TouchableOpacity
                                //onPress={() => this.sendMessage()}
                                >
                                    <FontAwesome5
                                        name="arrow-circle-up"
                                        size={35} color="green" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    {/* Model View */}
                    <TextChangeModel
                        onBackdropPress={() => this.setState({ isEditVisible: false })}
                        isVisible={isEditVisible}
                        label={label}
                        text={text}
                        font={font}
                        format={format}
                        color={color}
                        onChangeTextEdit={(text) => this.setState({ text: text })}
                        onChangeTextFont={(value) => this.setState({ font: value })}
                        onChangeTextFormat={(value) => this.setState({ format: value })}
                        onColorSelected={(color) => this.setState({ color: color })}
                        onPress={this.CloseModal} />

                    <ListviewModel
                        onBackdropPress={() => this.setState({ isListVisible: false })}
                        onModalHide={() => this.setState({ isTimerVisible: true })}
                        isVisible={isListVisible}
                        data={this.alldata}
                        itemSelected={(item) => this.selectScreen(item)}
                    />

                    <TouchModel
                        isVisible={isTimerVisible}
                        onBackdropPress={() => this.setState({ isTimerVisible: false })}
                        onPressRadio={(value) => this.setState({ selectTimer: value })}
                        selectTimer={selectTimer}
                        onPress={this.nextScreen}
                        onValueChange={val => this.setState({ distance: val })}
                        value={distance}
                    />
                    <SaveTemplete
                        isVisible={isSaveVisible}
                        onBackdropPress={() => this.setState({ isSaveVisible: false })}
                        onChangeText={(t) => this.setState({ scenename: t })}
                        onPressSave={this.saveScreens}
                        onPressCancel={this.cancelTemplete}
                    />
                    <Menu
                        navigation={this.goBack}
                        onSave={this.openTemplate}
                        onPreview={this.previewScreen}
                        onAdd={() => this.openModal(1)}
                        style={Styles.touch} />


                    <Modals
                        visible={this.state.editVisible}
                        swipeDirection='down'
                        onTouchOutside={() => {
                            this.setState({ editVisible: false });
                        }}
                        swipeThreshold={200}
                        footer={
                            <ModalFooter>
                                <ModalButton
                                    text="Edit"
                                    onPress={() => this.onEditAction(0)} />
                                <ModalButton
                                    text="Delete"
                                    onPress={() => this.onDeleteMessage()} />
                            </ModalFooter>
                        }>
                        <ModalContent >
                            <Text style={{ fontWeight: 'bold' }}>Choose Action</Text>
                        </ModalContent>
                    </Modals>

                    <Modals
                        visible={this.state.visible}
                        swipeDirection='down'
                        onTouchOutside={() => {
                            this.setState({ visible: false, status: 0 });
                        }}
                        swipeThreshold={200}
                        footer={
                            <ModalFooter>
                                <ModalButton
                                    text="CANCEL"
                                    onPress={() => this.openModal()}
                                />
                                <ModalButton
                                    text="OK"
                                    onPress={() => this.ok()}
                                />
                            </ModalFooter>
                        }
                    >
                        <ModalContent >
                            <TextInput
                                value={this.state.message}
                                style={Styles.edit_text}
                                placeholder='Text Message'
                                onChangeText={(text) => this.setState({ message: text })}
                            />
                            <View style={{ marginTop: ResHeight(2), marginLeft: ResWidth(1) }}>
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    onPress={(value) => { this.setState({ status: value }) }}
                                    formHorizontal={true}
                                    buttonSize={10}
                                />
                            </View>
                        </ModalContent>
                    </Modals>


                </View>
            </KeyboardAwareScrollView>)
    }




}

const radio_props = [
    { label: 'Incoming ', value: 0 },
    { label: 'Outgoing ', value: 1 },
    { label: 'TimeStamp ', value: 2 }
];

const mapStateToProps = (state) => {
    return {
        screen1: state.Red1.screen1
    }
}

const mapDispatchToProps = (dispatch) => ({
    addScreen: (item) => (dispatch({ type: INCOMING, payload: item })),
    clear: () => (dispatch({ type: CLEAR }))
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageScreen);
