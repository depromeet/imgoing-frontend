import React from 'react';
import Input, { InputChangeEventType, InputProps } from 'components/common/Input';
import { setModal } from 'modules/slices/modal';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { Plan } from 'types/index';

interface EditInputListProps {
  data: Plan;
  onChange?: (e: InputChangeEventType) => void;
}

const EditInput = styled(Input)`
  margin-bottom: 40px;
`;

const EditInputList = (props: EditInputListProps) => {
  const dispatch = useDispatch();
  const { data, onChange } = props;
  const planEditInputs: InputProps[] = [
    {
      name: 'name',
      title: '스케줄 이름을 입력해 주세요',
      placeholder: '스케줄 이름 입력하기',
      value: data.name,
    },
    {
      name: 'destination',
      title: '목적지를 입력해 주세요',
      placeholder: '목적지 설정하기',
      editable: false,
      onTouchEnd: () => dispatch(setModal({ modalType: 'setLocation' })),
      value: data.destination.dest_name,
    },
    {
      name: 'arrival_at',
      title: '도착 시간을 입력해 주세요',
      placeholder: '날짜 / 시간 설정하기',
      editable: false,
      onTouchEnd: () => dispatch(setModal({ modalType: 'datePicker' })),
      value: data.arrival_at,
    },
    {
      name: 'items',
      title: '외출 시 필요한 물품이 있나요?',
      placeholder: '필요 물품 입력하기',
      value: data.items,
    },
    {
      name: 'memo',
      title: '일정에 대한 상세 내용을 알려주세요',
      placeholder: '일정에 대한 상세 내용 입력하기',
      value: data.memo,
    },
  ];
  return (
    <>
      {planEditInputs.map((i, index) => (
        <EditInput key={index} {...i} onChange={onChange} />
      ))}
    </>
  );
};

export default EditInputList;
