import { Flex } from 'antd';
import Typography from 'antd/es/typography/Typography';
import { FC } from 'react';
import { SidebarLink } from './SidebarLink';

const sidebarLink = [
  {
    label: 'Category',
    path: '/cabinet/category',
  },
  {
    label: 'SubCategory',
    path: '/cabinet/subcategory',
  },
  {
    label: 'Products',
    path: '/cabinet/products',
  },
];

export const Sidebar: FC = () => {
  return (
    <Flex vertical flex={1} style={{ background: 'rgb(15 23 42)' }}>
      <Typography style={{ height: 50, textAlign: 'center', color: '#fff' }}>Logo</Typography>
      {sidebarLink.map((item,idx) => (
        <SidebarLink key={idx} {...item} />
      ))}
    </Flex>
  );
};
