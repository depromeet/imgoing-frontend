import React, { useState } from 'react';
import styled from 'styled-components/native';
import CalloutTypo from '../typography/CalloutTypo';
import CaptionTypo from '../typography/CaptionTypo';
import FootnoteTypo from '../typography/FootnoteTypo';
import SubheadlineTypo from '../typography/SubheadlineTypo';
import DeleteModal from './DeleteModal';
import MenuModal from './MenuModal';

interface PlanItemProps {
  data: {};
}

const PlanItem = (props: PlanItemProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);

  return (
    <PlanItemView
      onPress={() => {
        setIsExpanded(!isExpanded);
      }}>
      {/* 추후 컴포넌트화 고려 */}
      <ExpandableBar>
        {/* 시간에 따라 변경 */}
        <TimeTag>
          <CaptionTypo lang={'en'} weight={'B'} color={'white'}>
            PM
          </CaptionTypo>
        </TimeTag>
        <SubheadlineTypo lang={'en'} weight={'B'} color={'black'}>
          11:12
        </SubheadlineTypo>
        {/* 고정여부에 따라 변경 */}
        <ImageView source={require('../../../assets/images/pin.png')} />
        {/* 현재 isExpanded === false 일 때, 모달 안열리는 문제 존재 */}
        <OpenMenuButton onPress={() => setIsModalVisible(!isModalVisible)}>
          <IconImage source={require('../../../assets/images/menu.png')} />
        </OpenMenuButton>
        {/* 확장여부에 따라 내용 표시 변경 */}
        <ExpandButton>
          {!isExpanded ? (
            <ImageView source={require('../../../assets/images/down.png')} />
          ) : (
            <ImageView source={require('../../../assets/images/up.png')} />
          )}
        </ExpandButton>
      </ExpandableBar>
      <TitleView>
        <CalloutTypo lang={'ko'} weight={'R'} color={'grayHeavy'}>
          유나랑 영풍문고 앞에서 만나서 이번주 작업하기
        </CalloutTypo>
      </TitleView>
      {/* 컴포넌트화 고려 */}
      {isExpanded && (
        <DetailView>
          <Row>
            <IconImage source={require('../../../assets/images/⏳.png')} />
            <FootnoteTypo lang={'ko'} weight={'R'} color={'black'}>
              준비 40분 소요
            </FootnoteTypo>
          </Row>
          <Row>
            <IconImage source={require('../../../assets/images/📍.png')} />
            <FootnoteTypo lang={'ko'} weight={'R'} color={'black'}>
              홍대입구역 2번 출구
            </FootnoteTypo>
          </Row>
          {/* 지도 연결 필요 */}
          <KaKaoMapButton>
            <KaKaoMapImage source={require('../../../assets/images/kakaomap.png')} />
          </KaKaoMapButton>
          <Row>
            <IconImage source={require('../../../assets/images/🎒️.png')} />
            <FootnoteTypo lang={'ko'} weight={'R'} color={'black'}>
              보조 배터리, 고데기
            </FootnoteTypo>
          </Row>
          <Row>
            <IconImage source={require('../../../assets/images/✏️.png')} />
            <FootnoteTypo lang={'ko'} weight={'R'} color={'black'}>
              편의점 들러서 물 사기
            </FootnoteTypo>
          </Row>
          <MenuModal
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            isDeleteModalVisible={isDeleteModalVisible}
            setIsDeleteModalVisible={setIsDeleteModalVisible}
          />
          <DeleteModal
            isDeleteModalVisible={isDeleteModalVisible}
            setIsDeleteModalVisible={setIsDeleteModalVisible}
          />
        </DetailView>
      )}
    </PlanItemView>
  );
};

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

export default PlanItem;
