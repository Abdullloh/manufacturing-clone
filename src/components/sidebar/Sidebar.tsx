import { Flex } from 'antd';
import { FC } from 'react';
import { SidebarLink } from './SidebarLink';

const sidebarLink = [
  {
    label: 'Kategoriyalar',
    path: '/cabinet/category',
  },
  {
    label: 'Subkategoriyalar',
    path: '/cabinet/subcategory',
  },
  {
    label: "O'lchov birligi",
    path: '/cabinet/dimensions',
  },
  {
    label: 'Mahsulotlar',
    path: '/cabinet/products',
  },
];

export const Sidebar: FC = () => {
  return (
    <Flex vertical flex={1} style={{ background: 'rgb(15 23 42)' }}>
      {/* <Typography style={{ height: 50, textAlign: 'center', color: '#fff' }}>Logo</Typography> */}
      {sidebarLink.map((item, idx) => (
        <SidebarLink key={idx} {...item} />
      ))}
    </Flex>
  );
};
