import Head from 'next/head'
import ProductList from '../components/productList'

const Home = ({products}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1>This is the product page</h1>
      <ProductList products={products} />

    </div>
  )
}

export default Home

export const getStaticProps = async () =>{
  const res = await  fetch(`https://fakestoreapi.com/products`)
  const products =await res.json()

  return{
    props:{
      products
    }
  }
}
