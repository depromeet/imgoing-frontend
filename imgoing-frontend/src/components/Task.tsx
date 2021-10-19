import React, { useState, useEffect } from 'react';
import { TouchableHighlightProps } from 'react-native';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';

import { icon_bell } from '@assets/svg';
import CaptionTypo from '@/components/typography/CaptionTypo';
import SubheadlineTypo from '@/components/typography/SubheadlineTypo';

type GroupType = '루틴' | '즐겨찾기' | '북마크';

interface TaskProps {
  minutes: number;
  title: string;
  defaultNotification: boolean;
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

const Task = (props: TaskProps) => {
  const { title, minutes, group, defaultNotification } = props;
  const [isNotification, setNotification] = useState<boolean>(defaultNotification);
  useEffect(() => {
    console.log(isNotification);
  }, [isNotification]);
  return (
    <>
      <TouchableHighlight onPress={() => alert('test')}>
        <TaskView>
          {group && (
            <>
              <GroupTagView>
                <GroupTag bold>{group}</GroupTag>
              </GroupTagView>
              <Bar></Bar>
            </>
          )}
          <SubheadlineTypo>{minutes}분</SubheadlineTypo>
          <Title numberOfLines={1} color='grayHeavy'>
            {title}
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

export default Task;
