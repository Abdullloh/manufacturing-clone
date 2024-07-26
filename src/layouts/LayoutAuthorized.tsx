import { Flex } from 'antd';
import React, { FC, ReactNode } from 'react';
import { Sidebar } from '../components';
import { Outlet } from 'react-router-dom';

export const LayoutAuthorized: FC = () => {
  return (
    <Flex>
      <Sidebar />
      <Flex flex={5}>
        <Outlet />
      </Flex>
    </Flex>
  );
};
