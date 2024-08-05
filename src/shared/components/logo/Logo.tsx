import { Flex } from 'antd';
import { FC } from 'react';

export const Logo: FC = () => {
  return (
    <Flex style={{ margin: '30px' }} align="center" justify="center">
      <img width={130} height={120} src="/logo.png" alt="" />
    </Flex>
  );
};
