import styled from "styled-components";

export const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  border-radius: 15px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &:hover {
    background-color: var(--background);
  }
`;

export const CartItemImage = styled.img`
  border-radius: 5px;
  border: none;
  cursor: none;
  width: 20%;

  &:hover {
    cursor: default;
    border: none;
  }
`;

export const CartItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TotalContainer = styled.span`
  font-weight: var(--bold-text);
`;

export const DeleteCartButton = styled.span`
  margin-left: auto;
`;
