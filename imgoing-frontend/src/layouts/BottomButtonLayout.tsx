import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, NativeModules, Platform } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import RoundButton from 'components/common/RoundButton';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface BottomButtonLayoutProps {
  children: React.ReactNode;
  text: string;
  onPress: () => void;
  disabled?: boolean;
}

const BottomView = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${90 + getStatusBarHeight()}px;
  display: flex;
  justify-content: center;
`;

const ButtonView = styled.View`
  padding: 0 20px;
`;

const GradientOverlay = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const { StatusBarManager } = NativeModules;

const BottomButtonLayout = (props: BottomButtonLayoutProps) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const { children, text, onPress, disabled } = props;

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight((statusBarFrameData: any) => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={statusBarHeight + 44}>
      {children}
      <BottomView>
        <ButtonView>
          <RoundButton onPress={onPress} disabled={disabled}>
            {text}
          </RoundButton>
        </ButtonView>
        <GradientOverlay
          colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,1)']}
        />
      </BottomView>
    </KeyboardAvoidingView>
  );
};

export default BottomButtonLayout;
