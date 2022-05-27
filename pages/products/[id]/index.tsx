import { useRouter } from "next/router"

const products = ({products}) => {
    // const router= useRouter()
    // const {id} = router.query
  return (
    <div>
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
        <br />
        <div className="product-det">

            <h2>{products.title}</h2><br />
            <p>{products.description}</p><br />
            <h3>RS: {products.price}</h3><br />
            <style jsx>
                {`
                    .product-det {
                        height:200px;
                        width:50%;
                    }
                `}
            </style>
        </div>
    </div>
  )
}

export default products 

// export const getServerSideProps = async (context) =>{
//     const res = await  fetch(`https://fakestoreapi.com/products/${context.params.id}`)
//     const products =await res.json()
  
//     return{
//       props:{
//         products
//       }
//     }
//   }

export const getStaticProps = async (context) =>{
    const res = await  fetch(`https://fakestoreapi.com/products/${context.params.id}`)
    const products =await res.json()
  
    return{
      props:{
        products
      }
    }
  }

  export const getStaticPaths = async () =>{
    const res = await  fetch(`https://fakestoreapi.com/products`)
    const products =await res.json()

    const ids = products.map((products) => products.id)

    const paths = ids.map(id => ({params: {id:id.toString()}}))
    
    return{
      paths,
        fallback:false,
    }
  }


  