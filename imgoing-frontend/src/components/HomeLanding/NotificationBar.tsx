import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import { ColorScheme } from '@/constants';
import { FootnoteTypo } from '@/components/typography';

interface NotificationBarProps {
  setIsVisible: (value: boolean) => void;
  imoji: string;
  content: string;
  color?: keyof ColorScheme;
}

const NotificationBarWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  height: 46px;
  align-items: center;
  background-color: #f3f6ff;
  padding-left: 16px;
`;

const ShortcutButton = styled.Text`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.grayHeavy};
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  padding: 0 52px 0 8px;
`;

const CloseButton = styled.Image`
  margin-left: 52px;
`;

const NotificationBar = (props: NotificationBarProps) => {
  const { setIsVisible, imoji, content, color = 'black' } = props;
  return (
    <NotificationBarWrapper>
      <FootnoteTypo bold color={color}>
        {imoji}
        {content}
      </FootnoteTypo>
      <TouchableOpacity onPress={() => {}}>
        <ShortcutButton>바로 가기</ShortcutButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsVisible(false)}>
        <CloseButton source={require('../@assets/images/close_button.png')} />
      </TouchableOpacity>
    </NotificationBarWrapper>
  );
};

export default NotificationBar;
