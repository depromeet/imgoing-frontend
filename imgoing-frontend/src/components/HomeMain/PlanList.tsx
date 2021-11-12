import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';

import { Plan } from 'types/index';
import PlanItem from './PlanItem';

const PlanList = () => {
  const plan = useSelector((state) => state.plan);
  const pinnedPlan = plan.filter((item) => item.isPinned);
  const unPinnedPlan = plan.filter((item) => !item.isPinned);
  const integratedPlan = pinnedPlan.concat(unPinnedPlan);

  const renderItem: ListRenderItem<Plan> = ({ item }) => <PlanItem item={item} />;

  return (
    <FlatList<Plan>
      style={{ width: '90%' }}
      data={integratedPlan}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.id.toString()}
    />
  );
};

export default PlanList;
