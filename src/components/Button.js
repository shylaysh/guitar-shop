import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 15px;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(lightBlue)"};

  color: ${props => (props.cart ? "var(--mainYellow)" : "var(lightBlue)")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5 rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${props =>
      props.cart ? "var(--mainYellow)" : "var(lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
