import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootRouterParamList = {
  AuthLoading: undefined;
  Main: NavigatorScreenParams<MainRouterParamList> | undefined;
  PlanEdit: undefined;
  PlanAdd: undefined;
  Login: undefined;
  Webview: {
    url: string;
  };
  PastPlan: undefined;
};

export type MainRouterParamList = {
  Home: undefined;
  MyPlan: undefined;
  Settings: undefined;
};

export type RootRouterParams = StackNavigationProp<RootRouterParamList>;
export type MainRouterParams = StackNavigationProp<MainRouterParamList>;
