import React from "react";
import Realm from 'realm';
let realm;
import {
    Alert
} from "react-native";
import { StackActions, NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Image',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

class Base extends React.Component {

    constructor() {
        super();
        realm = new Realm({ path: 'Scenedb.realm' });
        this.alldata = realm.objects('Allscreen');
        this.state = {
            template: "",
            tempname: "",
            name: "",
            nf: "",
            nc: "",
            nfor: "",
            time: "",
            tc: "",
            tf: "18",
            tfor: "",
            profile: "",
            screen: '',
            action: '',
            actionValue: '',
            scenename: "",
            chromaicon: '',
            chromacolor: '',
            bg: '',
            text: '',
            font: '',
            color: "",
            format: "",

            isEditVisible: false,
            isListVisible: false,
            isTimerVisible: false,
            isSaveVisible: false,

            selectTimer: false,
            ScreenItem: [],

            label: '',
            selectButton: '',
            dialpad: '',

            visible: false,
            status: 0,
            message: '',
            timeStamp: '',
            data: [],
            msg: '',
            editVisible: false,
            id: '',
            initial: 0,
            editAction: "",

            background: 'white',
            colorView: false,
            switchValue: false,
        }
    }

    editModal = (label) => {
        this.setState({ label: label });
        this.setState({ isEditVisible: true });
    }
    openLayer = (select) => {
        this.setState({ selectButton: select });
        this.setState({ isListVisible: true });
    }
    selectScreen = (item) => {
        this.setState({ ScreenItem: item });
        this.setState({ isListVisible: false });
    }

    nextScreen = () => {
        let sec;
        let action;
        const { selectTimer,
            ScreenItem,
            screen,
            distance,
            name,
            nf,
            nc,
            nfor,
            time,
            tc,
            tf,
            tfor,
            template,
            tempname,
            profile,
            chromacolor,
            chromaicon,
            selectButton,
            bg } = this.state;

        if (ScreenItem != '') {
            if (selectTimer) {
                sec = distance;
                action = "timer";
            } else {
                sec = selectButton;
                action = "button";
            }
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
                actionValue: sec,
                chromacolor: chromacolor,
                chromaicon: chromaicon,
                bg: bg
            }

            this.setState({ isTimerVisible: false });
            this.props.addScreen(req);
            this.props.navigation.navigate(ScreenItem.screen, { item: ScreenItem });
        }
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    CloseModal = () => {
        const { text, font, color, label, format } = this.state;
        if (label === "name") {
            if (text != "") {
                this.setState({ name: text });
            }
            if (font != "") {
                this.setState({ nf: font });
            }
            if (color != "") {
                this.setState({ nc: color });
            }
            if (format != "") {
                this.setState({ nfor: format });
            }
        } else if (label === "time") {
            if (text != "") {
                this.setState({ time: text });
            }
            if (font != "") {
                this.setState({ tf: font });
            }
            if (color != "") {
                this.setState({ tc: color });
            }
            if (format != "") {
                this.setState({ tfor: format });
            }
        }
        this.setState({ text: "" });
        this.setState({ font: "" });
        this.setState({ color: "" });
        this.setState({ format: "" });
        this.setState({ isEditVisible: false });
    }

    previewScreen = () => {
        const { name, nf, nc, nfor, time, tc, tf,
            tfor, template, tempname,
            profile, screen, action, selectButton,
            chromacolor, chromaicon, bg } = this.state;
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
            actionValue: selectButton,
            chromacolor: chromacolor,
            chromaicon: chromaicon,
            bg: bg
        }

        console.log(JSON.stringify(req))
        Alert.alert(
            '',
            'Long press any where in the screen to exit this preview',
            [

                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK', onPress: () => {
                        this.props.addScreen(req);
                        this.props.navigation.navigate("Preview", { screen: false });
                    }
                },
            ],
            { cancelable: false },
        );
    }
    saveLocalTemplete = () => {
        const { name, nf, nc, nfor, time, tc, tf, tfor,
            template, tempname, profile, screen, action,
            selectButton, chromacolor, chromaicon, bg } = this.state;
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
            actionValue: selectButton,
            chromacolor: chromacolor,
            chromaicon: chromaicon,
            bg: bg
        }

        this.props.addScreen(req);
        this.setState({ isSaveVisible: true });
    }
    saveScreen = () => {
        if (this.state.scenename != "") {
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

            this.props.screen1.forEach((it, index) => {
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

            this.setState({ isSaveVisible: false });
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

    cancelTemplete = () => {
        this.setState({ isSaveVisible: false });
    }

    backgroundImg = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(JSON.stringify(response));
                this.setState({ bg: true })
                this.setState({ template: response.uri })
            }
        });
    }
}

export default Base;