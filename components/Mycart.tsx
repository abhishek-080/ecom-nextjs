import { useDispatch, useSelector } from "react-redux"
import { remove } from '../store/cart'
import CartStyle from '../styles/Mycart.module.css'



const Mycart = () => {

    const dispatch= useDispatch(); 

    const products= useSelector((state) => state.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
  return (
    <div>
        <h1>My Cart</h1>

        <div className={CartStyle.cart}>
        {                            

        products.map(products=>(
            <div className="cart-products">
                
                <img src={products.image} alt="" />          
                <h3>{products.title}</h3>
                <h3>{products.price}</h3>
                <button className='btn' onClick={() =>handleRemove(products.id)}> Remove</button>
            </div>
            

))
}
        </div>

    </div>
  )
}

export default Mycart