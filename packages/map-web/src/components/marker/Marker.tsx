import styled from '@emotion/styled';
import { colors } from 'design-token';

interface MarkerProps {
  name: string;
  address: string;
}
const Marker = (props: MarkerProps) => {
  const { name, address } = props;
  return (
    <MarkerWrapper>
      <MarkerMain>{name}</MarkerMain>
    </MarkerWrapper>
  );
};

export default Marker;

const MarkerMain = styled.div`
  background-color: ${colors.blue};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  border-radius: 100px;
  padding: 8px 12px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
`;
const MarkerWrapper = styled.div`
  position: relative;
  &::after {
    border-top: 12px solid ${colors.blue}; /* 화살표 */
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    content: '';
  }
`;
