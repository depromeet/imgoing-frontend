import { StackNavigationProp } from '@react-navigation/stack';

export type BottomTabParamList = {
  Home: undefined;
  Settings: undefined;
};

export type NavigatorParamList = {
  AuthLoading: undefined;
  Main: undefined;
  PlanEdit: undefined;
  PlanAdd: undefined;
  Login: undefined;
  KakaoRoute: {
    dest_nm: string;
    dest_lat: number;
    dest_lng: number;
  };
};

export type NavigatorParams = StackNavigationProp<NavigatorParamList>;
