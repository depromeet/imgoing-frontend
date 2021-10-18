import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { icon_plus } from '../../assets/svg';
import Input from '../components/common/Input';
import RectangleButton from '../components/common/RectangleButton';
import Task from '../components/Task';
import SubheadlineTypo from '../components/typography/SubheadlineTypo';
import BottomButtonLayout from '../layouts/BottomButtonLayout';

const EditView = styled.View`
  padding: 0 15px;
  padding-bottom: 90px;
  padding-top: 20px;
  background: white;
`;

const EditInput = styled(Input)`
  margin-bottom: 40px;
`;

const EditScreen = () => {
  return (
    <BottomButtonLayout text="적용하기" onPress={() => {}}>
      <ScrollView style={{ backgroundColor: 'white' }}>
        <EditView>
          <EditInput title="스케줄 이름을 입력해 주세요" placeholder="스케줄 이름 입력하기" />
          <EditInput title="목적지를 입력해 주세요" placeholder="목적지 설정하기" />
          <EditInput title="도착 시간을 입력해 주세요" placeholder="날짜 / 시간 설정하기" />
          <EditInput title="외출 시 필요한 물품이 있나요?" placeholder="필요 물품 입력하기" />
          <EditInput
            style={{ height: 150 }}
            multiline={true}
            numberOfLines={4}
            title="일정에 대한 상세 내용을 알려주세요"
            placeholder="일정에 대한 상세 내용 입력하기"
          />
          <SubheadlineTypo color="grayHeavy">어떤 준비가 필요할까요?</SubheadlineTypo>
          <RectangleButton leftIcon={icon_plus}>등록해 주세요</RectangleButton>
          <Task
            minutes={120}
            defaultNotification={true}
            title="옷 갈아입기 옷 갈아입기 옷 갈아입기..adadadadadadadadaddad"
          />
          <Task
            minutes={120}
            defaultNotification={true}
            title="옷 갈아입기 옷 갈아입기 옷 갈아입기..adadadadadadadadaddad"
            group="루틴"
          />
        </EditView>
      </ScrollView>
    </BottomButtonLayout>
  );
};

export default EditScreen;
