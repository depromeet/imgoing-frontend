import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';

import CalloutTypo from '@/components/typography/CalloutTypo';
import CaptionTypo from '@/components/typography/CaptionTypo';
import ContentTypo from '@/components/typography/ContentTypo';
import SubheadlineTypo from '@/components/typography/SubheadlineTypo';
import { setModal } from '@/modules/slices/modal';

interface PlanItemProps {
  data: {};
}

const PlanItemView = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 16px;
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

const TitleView = styled.View`
  margin: 8px 0 0 40px;
  width: 260px;
`;

const ImageView = styled.Image`
  margin-left: 6px;
`;

const OpenMenuButton = styled.TouchableOpacity`
  position: absolute;
  left: 82%;
`;

const ExpandButton = styled.View`
  position: absolute;
  left: 90%;
`;

const Row = styled.View`
  flex-direction: row;
  padding: 6px 0 6px 0;
`;

const DetailView = styled.View`
  padding: 16px 0 16px 0;
  margin-left: 40px;
`;

const IconImage = styled.Image`
  margin-right: 12px;
`;

const KaKaoMapButton = styled.TouchableOpacity`
  margin: 0px 0 0px 28px;
`;

const KaKaoMapImage = styled.Image``;

const PlanItem = (props: PlanItemProps) => {
  const [toggleExpanded, setToggleExpanded] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <PlanItemView
      activeOpacity={1}
      onPress={() => {
        setToggleExpanded(!toggleExpanded);
      }}>
      {/* 추후 컴포넌트화 고려 */}
      <ExpandableBar>
        {/* 시간에 따라 변경 */}
        <TimeTag>
          <CaptionTypo bold en color={'white'}>
            PM
          </CaptionTypo>
        </TimeTag>
        <SubheadlineTypo bold en color={'black'}>
          11:12
        </SubheadlineTypo>
        {/* 고정여부에 따라 변경 */}
        <ImageView source={require('../@assets/images/pin.png')} />
        {/* 현재 toggleExpanded === false 일 때, 모달 안열리는 문제 존재 */}
<<<<<<< HEAD
        <OpenMenuButton
          onPress={() => {
            dispatch(setModal('menu'));
          }}>
          <IconImage source={require('../../../assets/images/menu.png')} />
=======
        <OpenMenuButton onPress={() => setIsModalVisible(true)}>
          <IconImage source={require('../@assets/images/menu.png')} />
>>>>>>> c256b9992c71e4b3495169f3952af12e124b6609
        </OpenMenuButton>
        {/* 확장여부에 따라 내용 표시 변경 */}
        <ExpandButton>
          {!toggleExpanded ? (
            <ImageView source={require('../@assets/images/down.png')} />
          ) : (
            <ImageView source={require('../@assets/images/up.png')} />
          )}
        </ExpandButton>
      </ExpandableBar>
      <TitleView>
        <CalloutTypo color={'grayHeavy'}>유나랑 영풍문고 앞에서 만나서 이번주 작업하기</CalloutTypo>
      </TitleView>
      {/* 컴포넌트화 고려 */}
      {toggleExpanded && (
        <DetailView>
          <Row>
            <IconImage source={require('../@assets/images/⏳.png')} />
            <ContentTypo color={'black'}>준비 40분 소요</ContentTypo>
          </Row>
          <Row>
            <IconImage source={require('../@assets/images/📍.png')} />
            <ContentTypo color={'black'}>홍대입구역 2번 출구</ContentTypo>
          </Row>
          {/* 지도 연결 필요 */}
          <KaKaoMapButton activeOpacity={0.7}>
            <KaKaoMapImage source={require('../@assets/images/kakaomap.png')} />
          </KaKaoMapButton>
          <Row>
            <IconImage source={require('../@assets/images/🎒️.png')} />
            <ContentTypo color={'black'}>보조 배터리, 고데기</ContentTypo>
          </Row>
          <Row>
            <IconImage source={require('../@assets/images/✏️.png')} />
            <ContentTypo color={'black'}>편의점 들러서 물 사기</ContentTypo>
          </Row>
        </DetailView>
      )}
    </PlanItemView>
  );
};

export default PlanItem;
