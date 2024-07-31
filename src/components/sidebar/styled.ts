import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 30px;
  color: rgb(255 255 255);
  cursor: pointer;
  transition: all ease 1s;
  .active {
    color: red;
    background: rgb(44 51 68);
  }
  &:hover {
    background: rgb(44 51 68);
  }
`;
