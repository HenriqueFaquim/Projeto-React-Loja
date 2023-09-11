import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Card = ({image, title, id}) => {
    return (
        <div className='card'>
            <div id='imagem'>
            <img src={image} alt="Error" />
            </div>
            <p>{title}</p>
            <button><Link to={`/products/${id}`}>Comprar!</Link></button>
        </div>
    );
}

export default Card;
