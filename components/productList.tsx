import productStyle from '../styles/productList.module.css' 
import ProductCard from './Productcard'
import { useSelector } from "react-redux";


const ProductList = ({products}) => {

  const items = useSelector((state)=>state.cart)

  return (
    <div>
      <div className="cart-show">
                <h4><span className='cartCount'>Cart items:{items.length}</span></h4>
            </div>
        <div  className={productStyle.grid}>
        {
            products.map((products)=>(
              <ProductCard products={products}  />
        ))
      }
        </div>
     
    </div>
  )
}

export default ProductList