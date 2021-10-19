import React from 'react';
import styled from 'styled-components/native';

import RoundButton from '@/components/common/RoundButton';
import { CalloutTypo, ContentTypo } from '@/components/typography';

interface ModalProps {
  isDeleteModalVisible: boolean;
  setIsDeleteModalVisible: (value: boolean) => void;
}

const ModalView = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.white};
  width: 320px;
  height: 170px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 32px 19px 20px 19px;
`;

const TextRow = styled.View`
  flex-direction: row;
  margin: 4px 0 28px 0;
`;

const Row = styled.View`
  flex-direction: row;
`;
const Gap = styled.View`
  width: 12px;
`;

const DeleteModal = () => {
  return (
    <ModalView>
      <CalloutTypo bold color={'black'}>
        스케줄을 삭제할까요?
      </CalloutTypo>
      {/* 13px Typo로 변경 */}
      <TextRow>
        <ContentTypo color={'grayHeavy'}>삭제한 스케줄은 </ContentTypo>
        <ContentTypo color={'red'}>복구할 수 없어요</ContentTypo>
      </TextRow>
      <Row>
        <RoundButton
          blank
          onPress={() => {
            console.log('pressed');
          }}>
          아니요
        </RoundButton>
        <Gap />
        <RoundButton
          blank
          onPress={() => {
            console.log('pressed');
          }}>
          삭제하기
        </RoundButton>
      </Row>
    </ModalView>
  );
};

export default DeleteModal;
