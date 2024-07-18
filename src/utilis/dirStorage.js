import { Platform } from 'react-native';
import RNFS from "react-native-fs";

export const dirHome = Platform.select({
    ios: `${RNFS.DocumentDirectoryPath}/JagonMobile`,
    android: `${RNFS.ExternalStorageDirectoryPath}/JagonMobile`
  });  
  export const dirPicutures = `${dirHome}/Pictures`;
