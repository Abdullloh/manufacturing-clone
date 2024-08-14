import { UnorderedListOutlined } from '@ant-design/icons';
import { Flex } from 'antd';
import { FC } from 'react';

export const Header: FC<{ handleShow: () => void }> = ({ handleShow }) => {
  return (
    <Flex className="p-5">
      <UnorderedListOutlined onClick={handleShow} />
    </Flex>
  );
};
