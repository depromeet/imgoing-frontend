import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { SvgXml } from 'react-native-svg';
import { bag, bling, kakaolocation, location, task } from 'icons';
import Task from './Task';

interface Props extends ViewProps {
  detailType: PlanDetailType;
}

type PlanDetailType = 'arrival' | 'belongs' | 'detail' | 'task';

const detailInfo: {
  [key in PlanDetailType]: {
    icon: string;
    text: string;
  };
} = {
  arrival: {
    icon: location,
    text: '목적지',
  },
  belongs: {
    icon: bag,
    text: '필요물품',
  },
  detail: {
    icon: bling,
    text: '상세내용',
  },
  task: {
    icon: task,
    text: '준비항목',
  },
};

const PlanDetail = ({ children, detailType }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgXml
          xml={detailInfo[detailType].icon}
          width={20}
          height={20}
          fill={colors.grayDark}
          style={{ paddingRight: 4 }}
        />
        <Text fontType={'REGULAR_11'} color={colors.grayDark}>
          {detailInfo[detailType].text}
        </Text>
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const PlanDetails = () => {
  return (
    <View style={styles.planDetails}>
      <PlanDetail detailType={'arrival'}>
        <View style={styles.directionRow}>
          <SvgXml xml={kakaolocation} style={{ marginRight: 4 }} />
          <Text
            fontType={'BOLD_12'}
            color={colors.blue}
            style={{ textDecorationLine: 'underline' }}>
            도림천
          </Text>
        </View>
      </PlanDetail>
      <PlanDetail detailType={'belongs'}>
        <Text fontType={'REGULAR_12'}>
          보조 배터리, 갤워치, 여벌 트레닝복, 허브티, 스타벅스 텀블러, 고무줄 머리끈
        </Text>
      </PlanDetail>
      <PlanDetail detailType={'detail'}>
        <Text fontType={'REGULAR_12'}>
          {
            '집에 오는 길에 은행들려서 계좌 이체하고 오기. 서점 들러서 <트렌드 코리아 2022> <미움받을 용기> <오리지널스> 책 있는지 확인!'
          }
        </Text>
      </PlanDetail>
      <PlanDetail detailType={'task'}>
        <Task text={'💧 물 마시기'} time={1} />
        <Task text={'아침 식사'} time={15} />
        <Task text={'샤워'} time={15} />
        <Task text={'옷 갈아입기'} time={10} />
      </PlanDetail>
    </View>
  );
};

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingTop: 8,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  children: {
    paddingTop: 12,
    paddingLeft: 16,
  },
  planDetails: {
    paddingLeft: 50,
    paddingRight: 40,
  },
});

export default PlanDetails;
