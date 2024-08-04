import { Flex } from 'antd';
import { FC } from 'react';
import { StyledLink } from './styled';

export const SidebarLink: FC<{ label: string; path: string; icon: any }> = ({
  label,
  path,
  icon,
}) => {
  return (
    <StyledLink to={path}>
      <Flex gap={2}>
        {icon}
        {label}
      </Flex>
    </StyledLink>
  );
};
