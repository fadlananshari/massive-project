import styled from "styled-components";

const SignUpStyled = styled.div`

  .bg-login {
    background-color: #e3edff;
  }

  .border-bottom {
    border: 0 !important;
    border-bottom: 1px solid black !important;
    border-radius: 0px !important;
  }

  .btn-login {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 2px 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 10px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    color: #fff;
    background-color: #1E90FF;
    border-color: #1E90FF;
  }

  .daftar {
    color: #0500ff;
    text-decoration: none;
  }

  .login {
    color: #1e90ff;
  }

  .bottom {
    margin-top: auto !important;
  }

  .width-max-content {
    width: max-content;
  }
`;

export default SignUpStyled;
