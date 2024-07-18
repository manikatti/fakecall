import * as React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    FlatList,
    View,
    Text,
    Image,
    Platform,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Styles from "./Styles";
import { ResWidth, ResHeight, ResFontSizes } from "../utilis";
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import ListIcon from "../json/ListIcon";
import { connect } from 'react-redux';
import { CLEAR } from "../Redux/Action";
import Realm from 'realm';
let realm;

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        realm = new Realm({ path: 'Scenedb.realm' });
        this.S_incoming = realm.objects('Incomingscreen');
        this.S_message = realm.objects('Message');
        this.S_OutGoing = realm.objects('OutGoing');
        this.S_setting = realm.objects('Setting');
    }

    navigate = (item) => {
        console.log(JSON.stringify(item))
        this.props.clear();
        this.props.navigation.navigate(item.screen, { item: item });
    }

    renderRow = (item) => {
        return (
            <TouchableOpacity
                style={Styles.item}
                onPress={() => this.navigate(item)}>
                <ImageBackground
                    resizeMode="stretch"
                    source={ListIcon[item.template]}
                    style={Styles.screen}>
                </ImageBackground>
                <View style={{ flex: 1 }}>
                    <Text style={Styles.phonename}>{item.tempname}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <View style={Styles.container}>
                        <View style={{ flexDirection: 'row', height: ResHeight(8), backgroundColor: '#007ED0', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <View style={{ marginLeft: ResWidth(2) }}>
                                    <MaterialIcons name="ios-arrow-back" size={30} color="#ffffff" />
                                </View>
                            </TouchableOpacity>
                            {
                                Platform.OS === "android" ?
                                    <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: ResWidth(30) }}>
                                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: ResFontSizes(2.5) }}>Player List</Text>
                                    </View> : null
                            }
                        </View>
                        <View style={Styles.divide}>
                            <View style={Styles.title}>
                                <Text style={Styles.phonename1}>Incoming Call</Text>
                            </View>
                            <View style={{ flex: 9 }}>
                                <FlatList
                                    data={this.S_incoming}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    renderItem={({ item }) => this.renderRow(item)}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                        <View style={Styles.divide}>
                            <View style={Styles.title}>
                                <Text style={Styles.phonename1}>Outgoing Call</Text>
                            </View>
                            <View style={{ flex: 9 }}>
                                <FlatList
                                    data={this.S_OutGoing}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    renderItem={({ item }) => this.renderRow(item)}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                        <View style={Styles.divide}>
                            <View style={Styles.title}>
                                <Text style={Styles.phonename1}>Incoming Message</Text>
                            </View>
                            <View style={{ flex: 9 }}>
                                <FlatList
                                    data={this.S_message}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    renderItem={({ item }) => this.renderRow(item)}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                        <View style={Styles.divide}>
                            <View style={Styles.title}>
                                <Text style={Styles.phonename1}>Setting</Text>
                            </View>
                            <View style={{ flex: 9 }}>
                                <FlatList
                                    data={this.S_setting}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    renderItem={({ item }) => this.renderRow(item)}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    clear: () => (dispatch({ type: CLEAR }))
});
export default connect(null, mapDispatchToProps)(Dashboard);


