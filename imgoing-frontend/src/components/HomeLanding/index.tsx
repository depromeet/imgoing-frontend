import React from 'react';
import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

// import NotificationBar from './NotificationBar';
import landingCharacter from 'assets/svg/landingCharacter';
import { CalloutTypo, FootnoteTypo } from 'components/typography';
import RoundButton from 'components/common/RoundButton';
import { NavigatorParams } from 'types/Route';
import { resetStep } from 'modules/slices/stepOfAddingPlan';

const Wrapper = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const ImgView = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

const CalloutTypoView = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;

const FootnoteTypoView = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 108px;
`;

const HomeLandingButton = styled(RoundButton)`
  margin-bottom: 24px;
  width: 70%;
  max-width: 300px;
`;

// const NotificationBarView = styled.View`
//   width: 100%;
//   position: absolute;
//   top: 100%;
// `;

const HomeLanding = () => {
  const navigation = useNavigation<NavigatorParams>();
  // const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <Wrapper>
      <ImgView>
        <SvgXml xml={landingCharacter} width='100%' height='180px' />
      </ImgView>
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
      <HomeLandingButton onPress={() => navigation.navigate('PlanAdd')}>
        일정 등록하기
      </HomeLandingButton>
      {/* 설정 페이지 없을 땐 비활성화 */}
      {/* <NotificationBarView>
        {isVisible && (
          <NotificationBar
            imoji={'🗣'}
            content={'반복 루틴은 설정에서 관리할 수 있어요.'}
            color={'blue'}
            setIsVisible={setIsVisible}
          />
        )}
      </NotificationBarView> */}
    </Wrapper>
  );
};

export default HomeLanding;
