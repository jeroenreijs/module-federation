import styled from "styled-components";

export const Wrapper = styled.div`
  width: 4rem;
  height: 100vh;
  background-color: #222;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 1rem;
  list-style: none;
  color: white;
`;

export const NavLink = styled.a`
  margin: 0;
  padding: 0;
  list-style: none;
  color: white;

  & svg {
    fill: white;
    width: 2rem;
    height: 2rem;
  }
`;
