import * as React from 'react';
import {
    View,
    KeyboardAvoidingView,
    SafeAreaView,
    ImageBackground,
    Platform,
    Text,
    Image,
    TouchableHighlight,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Realm from 'realm';
let realm;
import Database from "../database/Database";
const db = new Database();
import Styles from "./Styles"
import Icons from "../json/ScreenIcons";
import CardView from 'react-native-cardview'
import { ResWidth, ResHeight, ResFontSizes } from '../utilis';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';
import { connect } from 'react-redux';
import { TIMER, COUNTADD } from "../Redux/Action";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class PlayerListView extends React.Component {


    constructor(props) {
        super(props);
        realm = new Realm({ path: 'Scenedb.realm' });
        this.S_details = realm.objects('Scene');
        this.state = {
            listviewmodel: false,
            listmodel: false,
            distance: 0,
            selectArr: '',
            editarr: ''

        }
    }
    selectSec = () => {
        const { distance, selectArr } = this.state;
        this.props.addScreen(distance);
        this.props.addcount(selectArr);
        this.setState({ listviewmodel: false });
        let hondas = realm.objects('SceneDetails').filtered('scenename = $0', selectArr.scenename);
      
        this.props.navigation.navigate("Preview", { item: hondas });
    }
    navigate = (item) => {
        this.setState({ selectArr: item });
        this.setState({ listviewmodel: true });
    }

    editItem = (item) => {
        this.setState({ listmodel: true });
        let a = realm.objects('SceneDetails').filtered('scenename = $0', item.scenename);
        this.setState({ editarr: a });
    }

    renderRow = (item) => {
        return (

            <View
                style={Styles.item}>
                <Text style={Styles.phonename}>{item.scenename}</Text>
                <View style={Styles.viewbtn}>
                    <TouchableHighlight onPress={() => this.navigate(item)} style={Styles.btn}>
                        <Text style={Styles.btntext}>Preview</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.editItem(item)} style={Styles.btn}>
                        <Text style={Styles.btntext}>Edit</Text>
                    </TouchableHighlight>
                </View>
            </View>


        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: ResHeight(2),
                    width: ResWidth(100)
                }}
            />
        );
    };
    itemView = (item) => {
        return (
            <TouchableOpacity onPress={() => this.navigate(item)} style={Styles.item1}>
                <Text >{JSON.stringify(item)}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <KeyboardAwareScrollView
                contentContainerStyle={{ flex: 1 }}>
                <View style={Styles.container}>
                    <View style={{ flexDirection: 'row', height: ResHeight(8), backgroundColor: '#007ED0', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <View style={{ marginLeft: ResWidth(2) }}>
                                <MaterialIcons name="arrow-back" size={30} color="#ffffff" />
                            </View>
                        </TouchableOpacity>

                        {
                            Platform.OS === "android" ?
                                <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: ResWidth(30) }}>
                                    <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: ResFontSizes(2.5) }}>Player List</Text>
                                </View> : null
                        }


                    </View>
                    <View style={{ margin: ResHeight(2) }}>
                        <FlatList
                            data={this.S_details}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                            renderItem={({ item }) => this.renderRow(item)}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={this.renderSeparator} />
                    </View>
                    <Modal
                        isVisible={this.state.listviewmodel}
                        onBackdropPress={() => this.setState({ listviewmodel: false })}
                        style={Styles.model}>
                        <View style={Styles.viewmodel}>
                            <Text style={Styles.tilescc}>Trigger by Timer</Text>
                            <View style={Styles.timers}>
                                <Slider
                                    style={Styles.Slider}
                                    minimumValue={1}
                                    maximumValue={10}
                                    step={1}
                                    value={this.state.distance}
                                    onValueChange={val => this.setState({ distance: val })}
                                    minimumTrackTintColor="red"
                                    maximumTrackTintColor="#000000" />
                                <View style={Styles.text}>
                                    <Text style={{ fontSize: 20 }} >{this.state.distance} sec</Text>
                                </View>
                            </View>
                            <Text style={Styles.btntexs}>Long press any where on the screen to exit this play</Text>
                            <TouchableOpacity style={Styles.btnok} onPress={this.selectSec}>
                                <Text style={Styles.btntexts}>Play</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <Modal
                        isVisible={this.state.listmodel}
                        onBackdropPress={() => this.setState({ listmodel: false })}
                        style={Styles.model1}>
                        <View style={Styles.viewflatlist}>
                            <FlatList
                                data={this.state.a}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => this.itemView(item)}
                                keyExtractor={item => item.id} />
                        </View>
                    </Modal>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.Red1.count,
    }
}
const mapDispatchToProps = (dispatch) => ({
    addScreen: (item) => (dispatch({ type: TIMER, payload: item })),
    addcount: (count) => (dispatch({ type: COUNTADD, payload: count }))
});
export default connect(mapStateToProps, mapDispatchToProps)(PlayerListView);