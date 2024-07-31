import { Flex } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const LayoutAuthorized: FC = () => {
  return (
    <Flex style={{ height: '100%', width: '100%' }}>
      <Sidebar />
      <Flex flex={5} style={{ padding: '30px' }}>
        <Outlet />
      </Flex>
    </Flex>
  );
};
