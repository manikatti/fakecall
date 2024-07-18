import Realm from 'realm';
let realm;
import { Incoming, Outgoing, All, Message, Setting } from "../json"

export default class Database {

    createTable = () => {
        realm = new Realm({
            path: 'Scenedb.realm',
            schema: [
                {
                    name: 'Scene',
                    properties: {
                        _id: { type: 'int', default: 0 },
                        scenename: "string"
                    }
                },
                {
                    name: 'SceneDetails',
                    properties: {
                        _id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"

                    },
                },
                {
                    name: 'Incomingscreen',
                    properties: {
                        user_id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"
                    },
                },
                {
                    name: 'Allscreen',
                    properties: {
                        user_id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"
                    },
                },

                {
                    name: 'Message',
                    properties: {
                        user_id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"
                    },
                },

                {
                    name: 'OutGoing',
                    properties: {
                        user_id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"
                    },
                },
                {
                    name: 'Setting',
                    properties: {
                        user_id: { type: 'int', default: 0 },

                        name: 'string',
                        nf: 'string',
                        nc: 'string',
                        nfor: 'string',
                        time: 'string',
                        tf: 'string',
                        tc: 'string',
                        tfor: 'string',
                        scenename: "string",
                        tempname: 'string',
                        template: 'string',
                        screen: 'string',
                        action: 'string',
                        actionValue: 'string',
                        chromaicon: 'string',
                        chromacolor: 'string',
                        profile: 'string',
                        bg: "bool"
                    },
                },
                {
                    name: 'Sms',
                    properties: {
                        user_id: { type: 'int', default: 0 },
                        id: 'int',
                        message: 'string',
                        status: 'int',
                        timestamp: 'string',
                        scenename: 'string'

                    }
                }

            ],
        });
    }

    updateTempValue = () => {
        realm = new Realm({ path: 'Scenedb.realm' });
        let sc1 = realm.objects('Incomingscreen').sorted('user_id', true).length;
        let sc2 = realm.objects('Allscreen').sorted('user_id', true).length;
        let sc3 = realm.objects('Message').sorted('user_id', true).length;
        let sc4 = realm.objects('OutGoing').sorted('user_id', true).length;
        let sc5 = realm.objects('Setting').sorted('user_id', true).length;

        if (sc1 === 0) {
            Incoming.forEach((val, index) => {
                realm.write(() => {
                    var ID =
                        realm.objects('Incomingscreen').sorted('user_id', true).length > 0
                            ? realm.objects('Incomingscreen').sorted('user_id', true)[0]
                                .user_id + 1
                            : 1;
                    realm.create('Incomingscreen', {
                        user_id: ID,

                        name: val.name,
                        nf: val.nf,
                        nc: val.nc,
                        nfor: val.nfor,
                        time: val.time,
                        tf: val.tf,
                        tc: val.tc,
                        tfor: val.tfor,
                        scenename: val.scenename,
                        tempname: val.tempname,
                        template: val.template,
                        profile: val.profile,
                        screen: val.screen,
                        action: val.action,
                        actionValue: val.actionValue,
                        chromaicon: val.chromaicon,
                        chromacolor: val.chromacolor,
                        bg: val.bg
                    });
                });
            });
        }
        if (sc2 === 0) {
            All.forEach((val, index) => {
                realm.write(() => {
                    var ID =
                        realm.objects('Allscreen').sorted('user_id', true).length > 0
                            ? realm.objects('Allscreen').sorted('user_id', true)[0]
                                .user_id + 1
                            : 1;
                    realm.create('Allscreen', {
                        user_id: ID,

                        name: val.name,
                        nf: val.nf,
                        nc: val.nc,
                        nfor: val.nfor,
                        time: val.time,
                        tf: val.tf,
                        tc: val.tc,
                        tfor: val.tfor,
                        scenename: val.scenename,
                        tempname: val.tempname,
                        template: val.template,
                        profile: val.profile,
                        screen: val.screen,
                        action: val.action,
                        actionValue: val.actionValue,
                        chromaicon: val.chromaicon,
                        chromacolor: val.chromacolor,
                        bg: val.bg
                    });
                });
            });
        }
        if (sc3 === 0) {
            Message.forEach((val, index) => {
                realm.write(() => {
                    var ID =
                        realm.objects('Message').sorted('user_id', true).length > 0
                            ? realm.objects('Message').sorted('user_id', true)[0]
                                .user_id + 1
                            : 1;
                    realm.create('Message', {
                        user_id: ID,

                        name: val.name,
                        nf: val.nf,
                        nc: val.nc,
                        nfor: val.nfor,
                        time: val.time,
                        tf: val.tf,
                        tc: val.tc,
                        tfor: val.tfor,
                        scenename: val.scenename,
                        tempname: val.tempname,
                        template: val.template,
                        profile: val.profile,
                        screen: val.screen,
                        action: val.action,
                        actionValue: val.actionValue,
                        chromaicon: val.chromaicon,
                        chromacolor: val.chromacolor,
                        bg: val.bg
                    });
                });
            });
        }
        if (sc4 === 0) {
            Outgoing.forEach((val, index) => {
                realm.write(() => {
                    var ID =
                        realm.objects('OutGoing').sorted('user_id', true).length > 0
                            ? realm.objects('OutGoing').sorted('user_id', true)[0]
                                .user_id + 1
                            : 1;
                    realm.create('OutGoing', {
                        user_id: ID,

                        name: val.name,
                        nf: val.nf,
                        nc: val.nc,
                        nfor: val.nfor,
                        time: val.time,
                        tf: val.tf,
                        tc: val.tc,
                        tfor: val.tfor,
                        scenename: val.scenename,
                        tempname: val.tempname,
                        template: val.template,
                        profile: val.profile,
                        screen: val.screen,
                        action: val.action,
                        actionValue: val.actionValue,
                        chromaicon: val.chromaicon,
                        chromacolor: val.chromacolor,
                        bg: val.bg
                    });
                });
            });

        }
        if (sc5 === 0) {
            Setting.forEach((val, index) => {
                realm.write(() => {
                    var ID =
                        realm.objects('Setting').sorted('user_id', true).length > 0
                            ? realm.objects('Setting').sorted('user_id', true)[0]
                                .user_id + 1
                            : 1;
                    realm.create('Setting', {
                        user_id: ID,

                        name: val.name,
                        nf: val.nf,
                        nc: val.nc,
                        nfor: val.nfor,
                        time: val.time,
                        tf: val.tf,
                        tc: val.tc,
                        tfor: val.tfor,
                        scenename: val.scenename,
                        tempname: val.tempname,
                        template: val.template,
                        profile: val.profile,
                        screen: val.screen,
                        action: val.action,
                        actionValue: val.actionValue,
                        chromaicon: val.chromaicon,
                        chromacolor: val.chromacolor,
                        bg: val.bg
                    });
                });
            });
        }
    }
}