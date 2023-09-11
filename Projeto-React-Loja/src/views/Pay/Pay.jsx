import React from 'react'
import './index.scss'
import Header from '../../components/Header/Header'
import { Link, useParams } from 'react-router-dom'

const Pay = ({data}) => {
  const { PayId } = useParams()
  const item = data.find(product => product.id == PayId)
  return (
    <>
    <Header/>
    <div className='Pay'>
      <form className='Pay__left'>
        <label htmlFor="name">Nome:</label>
        <input className='text' type='text' placeholder='  Nome Completo' id='name'/>
        <label htmlFor="end">Endereço de entrega:</label>
        <input className='text' type='text' placeholder='  Endereço de entrega' id='end'/>
        <div>
          <h4>Forma de Pagamento:</h4>
          <p><input type="radio" name='payment' id='payment1'/> Pix</p>
           <p><input type="radio" name='payment' id='payment2'/> Boleto</p>
           <p><input type="radio" name='payment' id='payment3'/> Cartão de Crédito</p>
        </div>
      <button><Link>Enviar Pedido</Link></button>
      </form>

      <div>
        <div className='Pay__right'>        
            <h3>Resumo do Pedido:</h3>
            <span>Produtos (1): {item.price}</span>
            <span>Total: {item.price}</span>
        </div>
<div>

</div>
      </div>
    </div>
    </>
  )
}

export default Pay
