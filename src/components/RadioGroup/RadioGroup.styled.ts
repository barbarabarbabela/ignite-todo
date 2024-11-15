import styled from "styled-components";

export const Radiogroup = styled.input`
  appearance: none;
  width: 17px;
  height: 17px;
  border: 1px solid var(--blue);
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: var(--blue-dark);
    background-color: rgba(var(--blue-dark), 0.2);
  }

  &:checked {
    background-color: var(--purple-dark);
    border-color: var(--purple-dark);
  }

  &:checked::after {
    content: "✓";
    color: var(--gray-100);
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:checked:hover {
    background-color: var(--purple);
    border-color: var(--purple);
  }
`;
