import React from 'react';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';

import { removeModal } from 'modules/slices/modal';
import RoundButton from 'components/common/RoundButton';
import { CalloutTypo, ContentTypo } from 'components/typography';
import { removePlan } from 'modules/slices/plan';

const ModalView = styled.View`
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

const ModalButton = styled(RoundButton)`
  width: 145px;
`;

const DeleteModal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);

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
        <ModalButton
          blank
          onPress={() => {
            console.log('pressd');
            dispatch(removeModal());
          }}>
          아니요
        </ModalButton>
        <Gap />
        <ModalButton
          blank
          onPress={() => {
            console.log('pressd');
            dispatch(removeModal());
            dispatch(removePlan(Number(modal?.id)));
          }}>
          삭제하기
        </ModalButton>
      </Row>
    </ModalView>
  );
};

export default DeleteModal;
