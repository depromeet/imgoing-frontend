import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import { colors } from 'design-token';
import { Text } from 'ui';
import { SvgXml } from 'react-native-svg';
import { bag, bling, kakaolocation, location, task } from 'icons';
import Task from './Task';
import { Plan } from 'types';

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

const PlanDetails = ({ plan }: { plan: Plan }) => {
  return (
    <View style={styles.planDetails}>
      <PlanDetail detailType={'arrival'}>
        <View style={styles.directionRow}>
          <SvgXml xml={kakaolocation} style={{ marginRight: 4 }} />
          <Text
            fontType={'BOLD_12'}
            color={colors.blue}
            style={{ textDecorationLine: 'underline' }}>
            {plan.arrival.name}
          </Text>
        </View>
      </PlanDetail>
      <PlanDetail detailType={'belongs'}>
        <Text fontType={'REGULAR_12'}>{plan.belongings}</Text>
      </PlanDetail>
      <PlanDetail detailType={'detail'}>
        <Text fontType={'REGULAR_12'}>{plan.memo}</Text>
      </PlanDetail>
      <PlanDetail detailType={'task'}>
        {plan.tasks.map((task) => (
          <Task key={task.id} text={task.name} time={task.time} />
        ))}
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
