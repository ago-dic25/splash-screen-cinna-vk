import { StyleSheet } from "react-native/";
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const estilos = StyleSheet.create({
    container: {
    color: '#BD93BD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  camera: {
    flex: 1,
    aspectRatio:1
  }
});