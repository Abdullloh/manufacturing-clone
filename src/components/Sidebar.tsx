import { Flex } from 'antd';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const sidebarLink = ['/cabinet', '/products'];

export const Sidebar: FC = () => {
  return (
    <Flex flex={1}>
      {sidebarLink.map((item) => (
        <Link to={item}>{item}</Link>
      ))}
    </Flex>
  );
};
