import { Flex } from 'antd';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../shared/components';
import { Header } from '../shared/components/header';

export const LayoutAuthorized: FC = () => {
  const [show, setShow] = useState(true);
  const [size, setSize] = useState(window.innerWidth);

  const handleShow = () => {
    setShow(!show);
  };

  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (size < 768) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [size]);

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
