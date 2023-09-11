import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const PayCard = ({data}) => {
    const color = data.colors
    const sizes = data.sizes
    return (
        <div className='payCard'>
            <div id='imgPayment'>
                <div id='cardImg'>
                    <div> 
                        <img src={data.imgPathDetail} alt="Error" />  
                    </div>
                    <p>{data.title}</p>
                </div>
                <h3>Descrição</h3>
                <p>{data.title}</p>
            </div>

            <div id='payment'>
                <h1>Informações Sobre o Produto</h1>
                <h2>{data.price}</h2>
                <h3 id='h3cor'>Cor: {' '}
                {color.length ===1 ?
                color.map((cor,index) =>(
                    <span key={index}>{cor}</span>
)):
color.map((cor,index) => index+1 === color.length ? (
    <span key={index}>{cor}</span>
):(
    <span key={index}>{cor}, </span>)
)
}
</h3>

                <div id='colors'>
{
    color.map(cor =>(
        <div id='color' style={{backgroundColor: cor}}>

        </div>
    )

    )    
}
                </div>

                <div id='sizes'>

                {
    sizes.map(size =>(
        <div id='size'>
        <h4>{size}</h4>
        </div>
    )

    )    
}
                </div>
                <button><Link to={`/pay/${data.id}`}>Finalizar Compra</Link></button>
            </div>
        </div>
    );
}

export default PayCard;
