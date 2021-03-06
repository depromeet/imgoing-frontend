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
  AccountManage: undefined;
  Policy: undefined;
  PastPlan: undefined;
  RoutineManage: undefined;
  RoutineEdit: undefined;
  RoutineAdd: undefined;
};

export type MainRouterParamList = {
  Home: undefined;
  MyPlan: undefined;
  Settings: undefined;
};

export type RootRouterParams = StackNavigationProp<RootRouterParamList>;
export type MainRouterParams = StackNavigationProp<MainRouterParamList>;
