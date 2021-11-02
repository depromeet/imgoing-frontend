import React, { useState } from 'react';
import { StyleProp, TouchableHighlightProps, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { icon_bell } from 'assets/svg';
import { CaptionTypo, SubheadlineTypo } from 'components/typography';
import { TaskType } from 'types/index';

type GroupType = '루틴' | '즐겨찾기' | '북마크';

interface TaskProps extends TaskType {
  style?: StyleProp<ViewStyle>;
  group?: GroupType;
}

const TaskView = styled.View`
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0 12px 0 16px;
`;

const Title = styled(SubheadlineTypo)`
  flex: 1;
  padding: 0 16px 0 10px;
`;

const GroupTagView = styled.View`
  background-color: ${({ theme }) => theme.colors.grayHeavy};
  height: 20px;
  padding: 0 7px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GroupTag = styled(CaptionTypo)`
  color: ${({ theme }) => theme.colors.white};
`;

const Bar = styled.View`
  width: 2px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  border-radius: 100px;
  margin: 0 12px 0 12px;
`;

const TouchableHighlight = styled.TouchableHighlight.attrs<TouchableHighlightProps>((props) => {
  return {
    underlayColor: props.theme.colors.grayLight,
    activeOpacity: 0.6,
  };
})``;

const TaskItem = (props: TaskProps) => {
  const { name, time, group, notification, style } = props;
  const [isNotification, setNotification] = useState<boolean>(notification);
  return (
    <>
      <TouchableHighlight style={style} onPress={() => alert('test')}>
        <TaskView>
          {group && (
            <>
              <GroupTagView>
                <GroupTag bold>{group}</GroupTag>
              </GroupTagView>
              <Bar></Bar>
            </>
          )}
          <SubheadlineTypo>{time}분</SubheadlineTypo>
          <Title numberOfLines={1} color='grayHeavy'>
            {name}
          </Title>
          <SvgXml
            onPress={() => setNotification(!isNotification)}
            xml={isNotification ? icon_bell.set : icon_bell.unset}
            fill={'black'}
          />
        </TaskView>
      </TouchableHighlight>
    </>
  );
};

export default TaskItem;
