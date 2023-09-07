import React from 'react';
import logo from '../../assets/logo.svg';
import './index.scss';
import { FaCartShopping } from 'react-icons/fa6';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><strong>Home</strong></li>
                <li>Novidades</li>
                <li>Feminino</li>
                <li>Masculino</li>
                <li>Atendimento</li>
            </ul>
            <div className='header__cart'>
                <p>Meu Carrinho</p>
                <FaCartShopping size={30} />
            </div>
        </div>
    );
}

export default Header;
