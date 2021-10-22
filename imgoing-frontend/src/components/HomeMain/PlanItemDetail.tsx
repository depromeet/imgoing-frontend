import { CalloutTypo, ContentTypo } from 'components/typography';
import React from 'react';
import styled from 'styled-components/native';

interface PlanItemDetailProps {
  emoji: string;
  content: string;
}

const Row = styled.View`
  flex-direction: row;
  padding: 6px 0 6px 0;
  align-items: center;
`;

const Emoji = styled.View`
  margin-right: 12px;
`;

const PlanItemDetail = (props: PlanItemDetailProps) => {
  const { emoji, content } = props;
  return (
    <>
      <Row>
        <Emoji>
          <CalloutTypo bold color={'grayHeavy'}>
            {emoji}
          </CalloutTypo>
        </Emoji>
        <ContentTypo color={'black'}>{content}</ContentTypo>
      </Row>
    </>
  );
};

export default PlanItemDetail;
