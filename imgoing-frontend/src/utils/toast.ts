import Toast from 'react-native-root-toast';

export const showToastMessage = (toastContent: string) => {
  Toast.show(toastContent, {
    duration: Toast.durations.SHORT,
    position: -150,
    shadow: false,
    animation: true,
    delay: 0,
    opacity: 0.7,
  });
};
