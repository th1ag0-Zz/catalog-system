import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, FormBox, ButtonForm } from "./styles";

function Login() {

  const admin = {
    user: 'admin',
    password: '1234'
  }

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [access, setAcess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    if (user === admin.user && password === admin.password) {
      setAcess(true)
    } else {
      alert('Usuário e senha incorretos ;-;')
    }

  }

  return (
    <Container>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <label>Usuário:</label>
          <input
            required type="text"
            onChange={e => setUser(e.target.value)}
          />
          <label>Senha:</label>
          <input
            
            required type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <ButtonForm
              type="submit"
            >
            Confirmar
          </ButtonForm>

          {access && <Redirect to="/home" />}
          
        </form>
      </FormBox>
    </Container>
  )
}

export default Login;