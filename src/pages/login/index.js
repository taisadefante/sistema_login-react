import React from "react";
import { Container, Form } from "./style";

const Login = () => {
  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
        <div>
          <p>Não possui conta?</p>
          <a>Cadastrar</a>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
