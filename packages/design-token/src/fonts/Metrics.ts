// import { Dimensions } from 'react-native';

const { width, height } = { width: 300, height: 300 }; //Dimensions.get('window');

export const SCREEN_WIDTH = width < height ? width : height;
export const SCREEN_HEIGHT = width < height ? height : width;
