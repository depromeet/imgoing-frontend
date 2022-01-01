import React, { useState } from 'react';
import { LayoutAnimation, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';

import { colors } from 'design-token';
import { Text } from 'ui';
import { icon_arrowDown, icon_arrowUp } from 'icons';
import PlanDetails from './PlanDetails';
import Header from './Header';
import { Plan as PlanType } from 'types';

interface Props {
  plan: PlanType;
  active: boolean;
}

const Plan = ({ plan, active }: Props) => {
  const [expanded, toggleExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <Header active={active} title={plan.name} time={plan.arrivalAt} />
      <View>
        {expanded && <PlanDetails plan={plan} />}
        <View style={styles.expandContainer}>
          <TouchableOpacity
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              toggleExpanded(!expanded);
            }}>
            <View style={[styles.directionRow, styles.expandButton]}>
              <Text fontType={'REGULAR_12'}>더 보기</Text>
              <SvgXml
                xml={expanded ? icon_arrowUp : icon_arrowDown}
                fill={colors.grayDark}
                width={20}
                height={20}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  directionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 20,
  },
  expandContainer: {
    alignItems: 'flex-start',
    marginLeft: 50,
  },
  expandButton: {
    backgroundColor: colors.grayMedium,
    justifyContent: 'flex-start',
    borderRadius: 4,
    paddingVertical: 6,
    paddingLeft: 14,
    paddingRight: 6,
  },
});

export default Plan;
