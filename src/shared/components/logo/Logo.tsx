import { Flex } from 'antd';
import { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Flex style={{ margin: '30px' }} align="center" justify="center">
      <img width={200} height={170} src="/logo.png" alt="" />
    </Flex>
  );
};
