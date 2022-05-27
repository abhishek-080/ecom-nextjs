import Mycart from "../components/mycart";
import productStyle from '../styles/ProductList.module.css'

import React from 'react'

const mycart = () => {
  return (
    <div className={productStyle.grid}>
        <Mycart />
    </div>
  )
}

export default mycart