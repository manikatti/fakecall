import { createStackNavigator } from 'react-navigation-stack';
import { Dashboard } from "../dashboard";
import { HomeScreen } from "../home";
import { IncomingCall1, IncomingCall2 } from "../incoming";
import { AttenCall1, AttenCall2 } from "../attencall";
import { Outgoing1 } from "../outgoing";
import { GalleryScreen } from "../gallery";
import { MessageScreen } from "../message";
import ChromaScreen from "../chroma/ChromaScreen";
import { PreviewScreen } from "../preview";
import { PlayerListView } from "../player";

const AppStack = createStackNavigator({
    home: HomeScreen,
    dashboard: Dashboard,
    
    IncomingCall1: IncomingCall1,
    IncomingCall2: IncomingCall2,
    Attencall1: AttenCall1,
    Attencall2: AttenCall2,

    Outgoing1: Outgoing1,
    gallery: GalleryScreen,
    message: MessageScreen,
    chroma: ChromaScreen,

    Preview: PreviewScreen,
    playlist: PlayerListView,



}, {
    initialRouteName: "home",
    headerMode: 'none'
});

export default AppStack;