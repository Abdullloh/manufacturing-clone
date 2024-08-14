import {
  BgColorsOutlined,
  CheckCircleOutlined,
  CopyOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  LineHeightOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { Flex } from 'antd';
import { FC } from 'react';
import { Logo } from '../logo';
import { SidebarLink } from './SidebarLink';
import { StyledLink } from './styled';

const sidebarLink = [
  {
    icon: <SnippetsOutlined />,
    label: 'KATEGORIYA',
    path: '/cabinet/category',
  },
  {
    icon: <CopyOutlined />,
    label: 'SUBKATEGORIYA',
    path: '/cabinet/subcategory',
  },
  {
    icon: <LineHeightOutlined />,
    label: "O'LCHOV BIRLIGI",
    path: '/cabinet/dimensions',
  },
  {
    icon: <BgColorsOutlined />,
    label: 'MODEL',
    path: '/cabinet/model-types',
  },
  {
    icon: <DoubleRightOutlined />,
    label: 'KELGAN MAHSULOTLAR',
    path: '/cabinet/coming',
  },
  {
    icon: <CheckCircleOutlined />,
    label: 'OMBORDAGI MAHSULOTLAR',
    path: '/cabinet/products',
  },
  {
    icon: <DoubleLeftOutlined />,
    label: 'CHIQIB KETGAN MAHSULOTLAR',
    path: '/cabinet/exited',
  },
];

export const Sidebar: FC<{ show?: boolean }> = ({ show }) => {
  return (
    <Flex
      className={`${
        show ? 'flex-1' : 'hidden'
      } justify-between bg-[#0f172a] transition-all ease-in-out delay-150`}
      vertical
    >
      <Flex vertical>
        <Logo />
        {sidebarLink.map((item, idx) => (
          <SidebarLink key={idx} {...item} />
        ))}
      </Flex>
      <StyledLink to="/" style={{ color: '#fff', background: '#2b4c77' }}>
        TIZIMDAN CHIQISH
      </StyledLink>
    </Flex>
  );
};
