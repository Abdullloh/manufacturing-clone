import { FC } from 'react';
import { StyledLink } from './styled';

export const SidebarLink: FC<{ label: string; path: string }> = ({ label, path }) => {
  return <StyledLink to={path}>{label}</StyledLink>;
};
