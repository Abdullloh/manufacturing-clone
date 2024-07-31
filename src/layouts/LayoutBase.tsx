import { Flex } from 'antd';
import React, { FC } from 'react';
import { LoginPage } from '../pages/loginPage';

export const LayoutBase: FC = () => {
  return (
    <Flex style={{ height: '100%', width: '100%' }} align="center" justify="center">
      <LoginPage />
    </Flex>
  );
};
