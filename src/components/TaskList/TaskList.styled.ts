import styled from "styled-components";

export const TaskContainer = styled.div`
  margin-top: 4rem;
  display: flex;

  justify-content: space-between;
  font-weight: 700;
  font-size: 0.875rem;

  p:first-child {
    color: var(--blue);
    width: 138px;
  }

  p:last-child {
    color: var(--purple);
    width: 138px;
  }

  span {
    background-color: var(--gray-400);
    width: 25px;
    height: 19px;
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    color: var(--gray-200);
  }
`;

export const BodyContainer = styled.div`
  width: 46rem;
  margin: 0 auto;
`;
