import styled from "styled-components";

const CreateRobotStyled = styled.div`
  margin: 0 auto;
  max-width: 50%;
  background-color: #e5f9e0;
  border: 5px solid #d90429;
  border-radius: 1em;
  padding: 0.5em;

  .form {
    margin: 0 auto;
    text-align: center;

    &__input {
      margin: 0 0 1em 0;
    }

    &__button {
      min-width: 50%;
      min-height: 2em;
      color: #fff;
      background-color: #ef233c;
      border-radius: 1em;
      margin: 1em;
      border: none;
      cursor: pointer;
    }
  }

  .form-title {
    text-align: center;
  }
`;

export default CreateRobotStyled;
