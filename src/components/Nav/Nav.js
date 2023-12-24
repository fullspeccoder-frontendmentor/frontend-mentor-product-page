import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  border-bottom: 1px solid var(--text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
`;

export const NavHeadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 100%;

  h1 {
    font-size: 2rem;
    color: var(--highlighted-text);
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 1rem;
    height: 100%;

    li {
      color: var(--text);
      padding-top: 3.5rem;
      height: 100%;

      &:hover {
        color: var(--highlighted-text);
        cursor: pointer;
        border-bottom: 5px solid var(--primary);
      }
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  position: relative;

  svg {
    color: var(--highlighted-text);
    cursor: pointer;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid var(--primary);

  &:hover {
    border: 1px solid var(--primary-pale);
    cursor: pointer;
  }
`;

export const NotificationBanner = styled.span`
  position: absolute;
  top: 10px;
  left: 11px;
  font-size: 0.5rem;
  width: 25px;
  height: 10px;
  border-radius: 10px;
  background-color: var(--primary);
  color: var(--white);
  text-align: center;
`;
