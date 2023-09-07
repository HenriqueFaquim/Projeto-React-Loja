import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Search from '../../components/Search/Search'

function Home() {
  return (
    <div>
      <HeaderMenu/>
      <Search/>
    </div>
  )
}

export default Home
