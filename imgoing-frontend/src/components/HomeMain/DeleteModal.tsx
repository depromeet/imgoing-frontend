import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import RoundButton from '../common/RoundButton';
import CalloutTypo from '../typography/CalloutTypo';
import ContentTypo from '../typography/ContentTypo';

interface ModalProps {
  isDeleteModalVisible: boolean;
  setIsDeleteModalVisible: (value: boolean) => void;
}

const DeleteModal = (props: ModalProps) => {
  const { isDeleteModalVisible, setIsDeleteModalVisible } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={isDeleteModalVisible}>
      <ModalContainer
        onPress={() => {
          setIsDeleteModalVisible(!isDeleteModalVisible);
        }}>
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
              onClick={() => {
                setIsDeleteModalVisible(!isDeleteModalVisible);
              }}>
              아니요
            </RoundButton>
            <Gap />
            <RoundButton
              blank
              onClick={() => {
                setIsDeleteModalVisible(!isDeleteModalVisible);
              }}>
              삭제하기
            </RoundButton>
          </Row>
        </ModalView>
      </ModalContainer>
    </Modal>
  );
};

const ModalView = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.white};
  width: 320px;
  height: 170px;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 32px 19px 20px 19px;
`;

const ModalContainer = styled.TouchableOpacity`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
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

export default DeleteModal;
