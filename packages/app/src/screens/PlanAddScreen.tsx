import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ReactNativeModal from 'react-native-modal';
import { RootRouterParams } from 'types/Route';
import { Button, InputChangeEventType, InputGroup, Stack, Text } from 'ui';

const PlanAddScreen = () => {
  const [isFill, setIsFill] = useState(false);
  const [data, setData] = useState({
    name: '',
    departure: '',
    arrival: '',
    arrivalAt: '',
  });
  const { navigate } = useNavigation<RootRouterParams>();

  const onChangeHandler = (e: InputChangeEventType) => {
    setData({ ...data, [e.name]: e.nativeEvent.text });
  };

  useEffect(() => {
    const temp = Object.values(data).map((item) => item.length > 0);
    const isFill = !(temp.filter((item) => item === false).length > 0);
    setIsFill(isFill);
  }, [data]);

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
      <Stack>
        <Text style={{ marginTop: 40 }} fontType='BOLD_24'>
          {isFill
            ? '어떤 일정인지\n상세하게 알려주세요 ✍🏻'
            : '반가워요 👋\n어떤 일정이 있으신가요?'}
        </Text>
        <View style={styles.InputView}>
          <InputGroup
            onChange={onChangeHandler}
            name='필수 항목'
            items={[
              {
                name: 'name',
                visiableName: '일정명',
                placeholder: '일정명을 입력해주세요',
              },
              {
                name: 'departure',
                visiableName: '출발지',
                placeholder: '일정명을 입력해주세요',
              },
              {
                name: 'arrival',
                visiableName: '목적지',
                placeholder: '일정명을 입력해주세요',
              },
              {
                name: 'arrivalAt',
                visiableName: '도착시간',
                placeholder: '일정명을 입력해주세요',
              },
            ]}></InputGroup>
        </View>
        <View style={styles.InputView}>
          <InputGroup
            name='옵션 항목 (선택 사항)'
            items={[
              {
                name: 'belongings',
                visiableName: '필요물품',
                placeholder: '필요한 물품을 입력해주세요',
              },
              {
                name: 'memo',
                visiableName: '상세내용',
                placeholder: '상세내용을 입력해주세요',
              },
            ]}></InputGroup>
        </View>
        <View style={styles.ButtonView}>
          <Button disabled={!isFill} onPress={() => navigate('PlanAddTask')}>
            다음
          </Button>
        </View>
      </Stack>
    </KeyboardAwareScrollView>
  );
};

export default PlanAddScreen;

const styles = StyleSheet.create({
  InputView: {
    marginTop: 40,
  },
  ButtonView: {
    marginTop: 106,
  },
});
