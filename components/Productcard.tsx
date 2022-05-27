import Link from 'next/link'
import productStyle from '../styles/productList.module.css' 
import { useDispatch } from 'react-redux'
import { add } from '../store/cart';



const ProductCard= ({products}) => {

  const dispatch = useDispatch();

    const handleAdd=(products) =>{
        dispatch(add(products));
    }
    
  return (
    <>
          <div className={productStyle.card}>
          <div className="product-img">
              <img src={products.image} alt="" />
              <style jsx>
                  {`
                      .product-img img{
                          height:200px;
                          width:200px
                      }
                  `}
              </style>
          </div>
              <h3>{products.title}</h3>
              <p>Rs:{products.price}</p>
              <Link href="/products/[id]" as={`/products/${products.id}`}>
                <button>View Product</button>
              </Link>

              <button onClick={()=>handleAdd(products)}>Add to cart</button>

          </div>

    </>
  )
}

export default ProductCard