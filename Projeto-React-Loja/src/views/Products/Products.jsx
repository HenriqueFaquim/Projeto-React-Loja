import React from 'react'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'
import PayCard from '../../components/PayCard/PayCard'
import { useParams } from 'react-router-dom'

const Products = ({data}) => {

const { ProductId } = useParams()
const item = data.find(product => product.id == ProductId)

  return (
    <div>
      <HeaderMenu/>
      <Search/>
      <PayCard data={item} key={item.id}/>
    </div>
  )
}

export default Products