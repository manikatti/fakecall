import * as React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TouchableHighlight
} from 'react-native';
import Styles from "./Styles";
import { connect } from 'react-redux';
import {
    IncomingCall1,
    IncomingCall2,
    IncomingAtten1,
    IncomingAtten2,
    Gallery,
    Outgoingcall,
    ChromaKey,
    Message
} from "../inscreen/index";

class PreviewScreen extends React.Component {

    constructor(props) {
        super(props);
        this.it;
        this.state = {
            templen: 0,
            timer: null,

            minutes_Counter: '00',
            seconds_Counter: '00',
            startDisable: false,
            data: [],
            component: false,

        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    UNSAFE_componentWillMount() {
        let ar = this.props.navigation.getParam('screen', 'default');
        if (ar) {
            this.setState({ component: true });
            let data = this.props.navigation.getParam('item', 'default');

            this.setState({
                data: data
            });
            this.timeoutHandle = setTimeout(() => {
                this.setState({ component: false });
                if (data[0].action === "timer") {
                    setTimeout(() => {
                        this.toggleModal();
                    }, parseInt(data[0].actionValue) * 1000);
                } else {

                }
            }, this.props.sec * 1000);


        } else {
            this.setState({ data: this.props.screen1 });
        }
    }

    onButtonStart = () => {
        let timer = setInterval(() => {
            var num = (Number(this.state.seconds_Counter) + 1).toString(),
                count = this.state.minutes_Counter;
            if (Number(this.state.seconds_Counter) == 59) {
                count = (Number(this.state.minutes_Counter) + 1).toString();
                num = '00';
            }
            this.setState({
                minutes_Counter: count.length == 1 ? '0' + count : count,
                seconds_Counter: num.length == 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({ timer });
        this.setState({ startDisable: true });
    }
    toggleModal = (click) => {
        clearInterval(this.state.timer);
        const { templen, data } = this.state;
        if (templen < data.length - 1) {
            this.setState({ templen: this.state.templen + 1 });
            this.onButtonStart();
            // if (data[templen].action === "button") {
            //     if (click === data[templen].actionValue) {

            //     } else {
            //         //alert("no");
            //     }
            // } else {

            // }

        } else {
            clearInterval(this.state.timer);

            this.setState({ startDisable: false });
            this.props.navigation.goBack();
        }
    }

    longPress = () => {
        clearInterval(this.state.timer);

        this.setState({ startDisable: false });
        this.props.navigation.goBack();
    }
    render() {
        const { templen, data, component } = this.state;
        if (component) {
            return (
                <View style={{ flex: 1, backgroundColor: "#000" }}></View>
            )
        } else {
            let sc1 = data[templen];
        
            switch (sc1.screen) {
                case "IncomingCall1":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <IncomingCall1
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)} />
                        </TouchableHighlight>
                    )
                    break;
                case "IncomingCall2":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <IncomingCall2
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)}
                            />
                        </TouchableHighlight>
                    )
                    break;
                case "Attencall1":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <IncomingAtten1
                                timer={this.state.minutes_Counter + " : " + this.state.seconds_Counter}
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)} />
                        </TouchableHighlight >
                    )
                    break;
                case "Attencall2":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <IncomingAtten2
                                timer={this.state.minutes_Counter + " : " + this.state.seconds_Counter}
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)}
                            />
                        </TouchableHighlight>
                    )
                    break;

                case "gallery":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <Gallery
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)}
                            />
                        </TouchableHighlight>
                    )
                    break;

                case "Outgoing1":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <Outgoingcall
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)} />
                        </TouchableHighlight>
                    )
                    break;
                case "chroma":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <ChromaKey
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)} />
                        </TouchableHighlight>
                    )
                    break;
                case "message":
                    return (
                        <TouchableHighlight
                            onLongPress={this.longPress}
                            style={Styles.container}>
                            <Message
                                item={sc1}
                                onPress={(click) => this.toggleModal(click)} />
                        </TouchableHighlight>
                    )
                    break;
            }
        }
    }
}
const mapStateToProps = (state) => {
    return {
        screen1: state.Red1.screen1,
        sec: state.Red2.timer
    }
}
export default connect(mapStateToProps)(PreviewScreen);