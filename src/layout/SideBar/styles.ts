import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
 background: #fff;
 width: 400px;
 height: 100vh;
`;
export const Content = styled.div`
 padding: 20px;
`;
export const Icons = styled.div`
  display: flex;
  padding-top: 30px;
  flex-direction: column;

  svg {
   color: #c9c9c9;
  }
  h2 {
    color : rgba(0, 0, 0, 0.7);
  }
`;
export const Icon = styled.div`
   display: flex;
   flex-direction: column;
  
  a + a {
    margin-top : 20px;
  }
`;
export const Link = styled(NavLink)`
 text-decoration: none;
 display: flex;
 gap : 10px;
 color : inherit;
`;