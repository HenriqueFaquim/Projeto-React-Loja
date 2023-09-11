import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import Card from '../../components/Card/Card'

const Home = ({data}) => {
  return (
    <div>
      <HeaderMenu/>
      <Search/>
      <div className='cards'>
      {
        data.map(product =>(
          <Card className='card' title={product.title} image={product.imgPath} id={product.id} key={product.id}/>
        )
          )
      }
      </div>
    </div>
  )
}

export default Home
