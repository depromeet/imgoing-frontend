import React from 'react';
import Input, { InputChangeEventType, InputProps } from 'components/common/Input';
import { setModal } from 'modules/slices/modal';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/native';
import { Plan } from 'types/index';
import RectangleButton from 'components/common/RectangleButton';
import { icon_openRight } from 'assets/svg';
import { SubheadlineTypo } from 'components/typography';

interface EditInputListProps {
  data: Plan;
  onChange?: (e: InputChangeEventType) => void;
}

const EditInput = styled(Input)`
  margin-bottom: 40px;
`;

const Gap = styled.View<{ height: number }>`
  height: ${(props) => props.height}px;
`;

const EditInputList = (props: EditInputListProps) => {
  const dispatch = useDispatch();
  const { data, onChange } = props;
  const planEditInputs: (InputProps & { component?: JSX.Element })[] = [
    {
      name: 'name',
      title: '스케줄 이름을 입력해 주세요',
      placeholder: '스케줄 이름 입력하기',
      value: data.name,
    },
    {
      component: (
        <>
          <SubheadlineTypo color='grayHeavy'>출발지를 설정해 주세요</SubheadlineTypo>
          <Gap height={10} />
          <RectangleButton
            onPress={() =>
              dispatch(
                setModal({ modalType: 'setLocation', props: { type: 'setLocation/arrival' } }),
              )
            }
            rightIcon={icon_openRight}>
            {data.arrival.name || '출발지 설정하기'}
          </RectangleButton>
          <Gap height={40} />
        </>
      ),
    },
    {
      component: (
        <>
          <SubheadlineTypo color='grayHeavy'>목적지를 설정해 주세요</SubheadlineTypo>
          <Gap height={10} />
          <RectangleButton
            onPress={() =>
              dispatch(
                setModal({ modalType: 'setLocation', props: { type: 'setLocation/departure' } }),
              )
            }
            rightIcon={icon_openRight}>
            {data.departure.name || '목저지 설정하기'}
          </RectangleButton>
          <Gap height={40} />
        </>
      ),
    },

    {
      name: 'arrivalAt',
      title: '도착 시간을 입력해 주세요',
      placeholder: '날짜 / 시간 설정하기',
      editable: false,
      onTouchEnd: () => dispatch(setModal({ modalType: 'datePicker' })),
      value: data.arrivalAt,
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
      {planEditInputs.map((item, index) =>
        item.component ? (
          <React.Fragment key={index}>{item.component}</React.Fragment>
        ) : (
          <EditInput key={index} {...item} onChange={onChange} />
        ),
      )}
    </>
  );
};

export default EditInputList;
