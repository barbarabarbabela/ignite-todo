import styled from "styled-components";

export const Container = styled.div`
  color: var(--gray-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 46rem;
  margin: auto;
  gap: 1rem;

  padding: 4rem 1.5rem;
  border-top: 1px solid var(--gray-400);

  span {
    font-weight: 700;
  }
`;
