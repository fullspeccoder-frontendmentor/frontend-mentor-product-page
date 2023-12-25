import styled from "styled-components";

export const CartContainer = styled.aside`
  position: absolute;
  top: 65px;
  left: -75px;
  min-width: 400px;
  min-height: 150px;
  overflow-y: hidden;
  box-shadow: 0px 0px 5px 3px var(--text);
  background-color: var(--white);

  h4 {
    border-bottom: 1px solid #c4c4c499;
    padding: 1rem 1.5rem;
  }
`;

export const CartItemsContainer = styled.ul`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartButtonContainer = styled.div`
  width: 100%;
  padding: 1rem 1.25rem;

  button {
    width: 100%;
    padding: 0.75rem 0;
    border: none;
    background-color: var(--primary);
    color: var(--white);
    border-radius: 10px;
    font-family: "Kumbh Sans";
    font-weight: var(--bold-text);
    letter-spacing: 0.1rem;
  }
`;

export const MessageContainer = styled.div`
  color: var(--text);
  text-align: center;
`;
