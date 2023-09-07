import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Header from '../../components/Header/Header'


const Login = () => {
  return (
    <section className='login'>
      <Header/>
      <form>
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h2>você pode entrar com o seu CPF</h2>

          <div>
            <label htmlFor='name'>Digite seu CPF:</label> <br />
            <input type='text' id='name' placeholder='Nome Completo'></input> <br />
          </div>

          <div>
            <label htmlFor='password'>Senha:</label> <br />
            <input type='password' id='password' placeholder='*********'></input> <br />
          </div>

            <button type='submit'><Link to={'/home'}>Entrar</Link></button>
      </form>
    </section>
  )
}

export default Login