import React, { useState } from 'react';
import CalloutTypo from '../typography/CalloutTypo';
import styled from 'styled-components/native';
import FootnoteTypo from '../typography/FootnoteTypo';
// import NotificationBar from './NotificationBar';
import RoundButton from '../common/RoundButton';

const HomeLanding = () => {
  // const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <>
      <ImgView source={require('../../../assets/images/landing.png')} />
      <CalloutTypoView>
        <CalloutTypo bold>만나서 반가워요. 암고잉과</CalloutTypo>
        <CalloutTypo bold>첫 번째 일정을 등록해 볼까요?</CalloutTypo>
      </CalloutTypoView>
      <FootnoteTypoView>
        <FootnoteTypo color={'grayHeavy'}>
          나만의 준비 루틴을 설정하고, 약속 시간에 늦지 않게
        </FootnoteTypo>
        <FootnoteTypo color={'grayHeavy'}>
          도착해 보세요! 더 이상 지각 걱정은 필요 없어요.
        </FootnoteTypo>
      </FootnoteTypoView>
      <ButtonView>
        <RoundButton onClick={() => {}} blank>
          가이드 보기
        </RoundButton>
        <Gap />
        <RoundButton onClick={() => {}}>일정 등록하기</RoundButton>
      </ButtonView>
      {/* 설정 페이지 없을 땐 비활성화 */}
      {/* <NotificationBarView>
        {isVisible && (
          <NotificationBar
            imoji="🗣"
            content="반복 루틴은 설정에서 관리할 수 있어요."
            color="blue"
            setIsVisible={setIsVisible}
          />
        )}
      </NotificationBarView> */}
    </>
  );
};

const ImgView = styled.Image`
  height: 180px;
  width: 260px;
  margin-top: 119px;
  margin-bottom: 40.99px;
`;

const CalloutTypoView = styled.View`
  align-items: center;
  height: 46px;
  width: 100%;
  margin-bottom: 16px;
`;

const FootnoteTypoView = styled.View`
  align-items: center;
  width: 100%;
  height: 34px;
  margin-bottom: 108px;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 50px;
  width: 100%;
  margin-bottom: 24px;
`;

const Gap = styled.View`
  width: 12px;
`;

// const NotificationBarView = styled.View`
//   width: 100%;
//   position: absolute;
//   top: 100%;
// `;

export default HomeLanding;
