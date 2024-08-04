import {
  CopyOutlined,
  FormatPainterOutlined,
  ScissorOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { FC } from 'react';
import { Logo } from '../../shared/components/logo';
import { SidebarLink } from './SidebarLink';
import { StyledLink } from './styled';

const sidebarLink = [
  {
    icon: <SnippetsOutlined />,
    label: 'Kategoriyalar',
    path: '/cabinet/category',
  },
  {
    icon: <CopyOutlined />,
    label: 'Subkategoriyalar',
    path: '/cabinet/subcategory',
  },
  {
    icon: <ScissorOutlined />,
    label: "O'lchov birligi",
    path: '/cabinet/dimensions',
  },
  {
    icon: <FormatPainterOutlined />,
    label: 'Model turlari',
    path: '/cabinet/model-types',
  },
  {
    icon: <></>,
    label: 'Mahsulotlar',
    path: '/cabinet/products',
  },
];

export const Sidebar: FC = () => {
  return (
    <Flex vertical justify="space-between" flex={1} style={{ background: 'rgb(15 23 42)' }}>
      <Flex vertical>
        <Logo />
        {sidebarLink.map((item, idx) => (
          <SidebarLink key={idx} {...item} />
        ))}
      </Flex>
      <StyledLink to="/" style={{ color: 'red' }}>
        {' '}
        Tizimdan chiqish{' '}
      </StyledLink>
    </Flex>
  );
};
