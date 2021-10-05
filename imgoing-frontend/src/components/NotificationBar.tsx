import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import FootnoteTypo from './typography/FootnoteTypo';

interface NotificationBarProps {
  setIsNotiBarVisible: (value: boolean) => void;
}

const NotificationBarWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  height: 46px;
  align-items: center;
  justify-content: center;
`;

const ShortcutButton = styled(Text)`
  padding-left: 8px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.grayHeavy};
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
`;

const NotiMessage = styled(FootnoteTypo)`
  color: #0045b0;
`;

const CloseButton = styled(Image)`
  margin-left: 52px;
`;

const NotificationBar = (props: NotificationBarProps) => {
  const { setIsNotiBarVisible } = props;
  return (
    <NotificationBarWrapper>
      <NotiMessage lang={'ko'} weight={'B'} color={'blue'}>
        🗣 반복 루틴은 설정에서 관리할 수 있어요.
      </NotiMessage>
      <TouchableOpacity onPress={() => {}}>
        <ShortcutButton>바로 가기</ShortcutButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsNotiBarVisible(false)}>
        <CloseButton source={require('../../assets/images/close_button.png')} />
      </TouchableOpacity>
    </NotificationBarWrapper>
  );
};

export default NotificationBar;
