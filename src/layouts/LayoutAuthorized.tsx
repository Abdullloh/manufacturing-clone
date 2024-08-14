import { Flex } from 'antd';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../shared/components';
import { Header } from '../shared/components/header';

export const LayoutAuthorized: FC = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Flex className="h-[100%] w-[100%]">
      <Sidebar show={show} />
      <Flex vertical className="h-[100%] w-[100%]">
        <Header handleShow={handleShow} />
        <Flex flex={5} style={{ padding: '30px' }}>
          <Outlet />
        </Flex>
      </Flex>
    </Flex>
  );
};
