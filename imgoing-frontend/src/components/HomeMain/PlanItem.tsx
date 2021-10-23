import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { icon_contract, icon_expand, icon_moreHorizCircle, icon_pin } from 'assets/svg';
import kakaoMap from 'assets/svg/kakaoMap';
import { colors } from 'constant/index';
import { setModal } from 'modules/slices/modal';
import { CalloutTypo, CaptionTypo, SubheadlineTypo } from 'components/typography';
import { Plan, Task } from 'types/index';
import PlanItemDetail from './PlanItemDetail';

const PlanItemView = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 16px;
  padding-top: 5px;
`;

const ExpandableBar = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TimeTag = styled.View`
  height: 18px;
  width: 32px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.grayHeavy};
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const Pin = styled.View`
  width: 25px;
  padding-left: 6px;
`;

const OpenMenuButton = styled.TouchableOpacity`
  position: absolute;
  left: 82%;
  width: 50px;
`;

const ExpandButton = styled.View`
  position: absolute;
  left: 90%;
  width: 50px;
`;

const TitleView = styled.View`
  margin: 8px 0 0 40px;
  width: 260px;
`;

const DetailView = styled.View`
  padding: 16px 0 16px 0;
  margin-left: 40px;
`;

const KaKaoMapButton = styled.TouchableOpacity`
  justify-content: flex-start;
  width: 100px;
  margin-left: 28px;
`;

// 추후 시간관련 함수들을 util로 빼는것도 좋을듯합니다.
const getStandByTime = (tasks: Task[]): string => {
  let totalDuration = 0;
  tasks.forEach((task) => {
    totalDuration += task.duration;
  });
  return totalDuration > 60
    ? `${parseInt((totalDuration / 60).toString())}시간 ${totalDuration % 60}`
    : totalDuration.toString();
};

const PlanItem = ({ item }: { item: Plan }) => {
  const { arrival_at, destination, items, memo, name, tasks, isPinned, id } = item;
  const [toggleExpanded, setToggleExpanded] = useState<boolean>(false);

  const dispatch = useDispatch();

  const arrivalDate = moment(arrival_at);
  const checkAMPM = arrivalDate.format('A');
  const arrivalTime = arrivalDate.format('MM/DD hh:mm');
  const standByTime = getStandByTime(tasks);

  return (
    <PlanItemView
      activeOpacity={1}
      onPress={() => {
        setToggleExpanded(!toggleExpanded);
      }}>
      {/* 추후 컴포넌트화 고려 */}
      <ExpandableBar>
        <TimeTag>
          <CaptionTypo bold en color={'white'}>
            {checkAMPM}
          </CaptionTypo>
        </TimeTag>
        <SubheadlineTypo bold en color={'black'}>
          {arrivalTime}
        </SubheadlineTypo>
        {isPinned && (
          <Pin>
            <SvgXml xml={icon_pin.fill} width='100%' height='16px' fill={colors.blue} />
          </Pin>
        )}
        <OpenMenuButton onPress={() => dispatch(setModal({ modalType: 'menu', id: id }))}>
          <SvgXml xml={icon_moreHorizCircle} width='100%' height='22px' fill={colors.black} />
        </OpenMenuButton>
        <ExpandButton>
          {!toggleExpanded ? (
            <SvgXml xml={icon_expand} width='100%' height='16px' fill={colors.black} />
          ) : (
            <SvgXml xml={icon_contract} width='100%' height='16px' fill={colors.black} />
          )}
        </ExpandButton>
      </ExpandableBar>
      <TitleView>
        <CalloutTypo color={'grayHeavy'}>{name}</CalloutTypo>
      </TitleView>
      {toggleExpanded && (
        <DetailView>
          <PlanItemDetail emoji={`⏳`} content={`준비 ${standByTime}분 소요`} />
          <PlanItemDetail emoji={`📍`} content={destination.dest_name} />
          {/* 지도 연결 필요 */}
          <KaKaoMapButton activeOpacity={0.7}>
            <SvgXml xml={kakaoMap} width='100%' height='32px' />
          </KaKaoMapButton>
          <PlanItemDetail emoji={`🎒️`} content={items} />
          <PlanItemDetail emoji={`✏️`} content={memo} />
        </DetailView>
      )}
    </PlanItemView>
  );
};

export default PlanItem;
