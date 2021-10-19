import React, { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { useDispatch } from 'react-redux';

import { icon_contract, icon_expand, icon_moreHorizCircle, icon_pin } from 'assets/svg';
import kakaoMap from 'assets/svg/kakaoMap';
import { colors } from 'constant/index';
import { setModal } from 'modules/slices/modal';
import { CalloutTypo, CaptionTypo, ContentTypo, SubheadlineTypo } from 'components/typography';

interface PlanItemProps {
  data: {};
}

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

const Emoji = styled.View`
  margin-right: 12px;
`;

const Row = styled.View`
  flex-direction: row;
  padding: 6px 0 6px 0;
  align-items: center;
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
        <Pin>
          <SvgXml xml={icon_pin.fill} width='100%' height='16px' fill={colors.blue} />
        </Pin>
        {/* 현재 toggleExpanded === false 일 때, 모달 안열리는 문제 존재 */}
        <OpenMenuButton onPress={() => dispatch(setModal('menu'))}>
          <SvgXml xml={icon_moreHorizCircle} width='100%' height='22px' fill={colors.black} />
        </OpenMenuButton>
        {/* 확장여부에 따라 내용 표시 변경 */}
        <ExpandButton>
          {!toggleExpanded ? (
            <SvgXml xml={icon_expand} width='100%' height='16px' fill={colors.black} />
          ) : (
            <SvgXml xml={icon_contract} width='100%' height='16px' fill={colors.black} />
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
            <Emoji>
              <CalloutTypo bold color={'grayHeavy'}>
                ⏳
              </CalloutTypo>
            </Emoji>
            <ContentTypo color={'black'}>준비 40분 소요</ContentTypo>
          </Row>
          <Row>
            <Emoji>
              <CalloutTypo bold color={'grayHeavy'}>
                📍
              </CalloutTypo>
            </Emoji>
            <ContentTypo color={'black'}>홍대입구역 2번 출구</ContentTypo>
          </Row>
          {/* 지도 연결 필요 */}
          <KaKaoMapButton activeOpacity={0.7}>
            <SvgXml xml={kakaoMap} width='100%' height='32px' />
          </KaKaoMapButton>
          <Row>
            <Emoji>
              <CalloutTypo bold color={'grayHeavy'}>
                🎒️
              </CalloutTypo>
            </Emoji>
            <ContentTypo color={'black'}>보조 배터리, 고데기</ContentTypo>
          </Row>
          <Row>
            <Emoji>
              <CalloutTypo bold color={'grayHeavy'}>
                ✏️
              </CalloutTypo>
            </Emoji>
            <ContentTypo color={'black'}>편의점 들러서 물 사기</ContentTypo>
          </Row>
        </DetailView>
      )}
    </PlanItemView>
  );
};

export default PlanItem;
