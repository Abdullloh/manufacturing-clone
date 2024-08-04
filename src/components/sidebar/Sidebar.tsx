import { Flex } from 'antd';
import { FC } from 'react';
import { Logo } from '../../shared/components/logo';
import { SidebarLink } from './SidebarLink';
import { StyledLink } from './styled';

const sidebarLink = [
  {
    // icon:<Cate
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
    label: 'Model turlari',
    path: '/cabinet/model-types',
  },
  {
    label: 'Mahsulotlar',
    path: '/cabinet/products',
  },
];

export const Sidebar: FC = () => {
  return (
    <Flex vertical justify="space-between" flex={1} style={{ background: 'rgb(15 23 42)' }}>
      {/* <Typography style={{ height: 50, textAlign: 'center', color: '#fff' }}>Logo</Typography> */}
      <Flex vertical>
        <Logo />
        {sidebarLink.map((item, idx) => (
          <SidebarLink key={idx} {...item} />
        ))}
      </Flex>
      <StyledLink to="/"> Log out </StyledLink>
    </Flex>
  );
};
