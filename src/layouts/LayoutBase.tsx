import { Flex } from 'antd';
import { FC } from 'react';
import { LoginPage } from '../pages/LoginPage/LoginPage';

export const LayoutBase: FC = () => {
  return (
    <Flex style={{ height: '100%', width: '100%' }} align="center" justify="center">
      <LoginPage />
    </Flex>
  );
};
