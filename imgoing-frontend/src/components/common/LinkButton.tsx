import React from 'react';
import { TextProps } from 'react-native';

import { SubheadlineTypo } from 'components/typography';

interface ButtonProps extends TextProps {
  children: React.ReactNode;
}

const LinkButton = (props: ButtonProps) => {
  return (
    <SubheadlineTypo {...props} bold color={'black'} style={{ textDecorationLine: 'underline' }}>
      {props.children}
    </SubheadlineTypo>
  );
};

export default LinkButton;
