import navStyles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={navStyles.nav}>
        <ul>
          <Link href='/'>Home</Link>           
          <Link href='/about'>About</Link>
          <Link href='/mycart'>Cart</Link>
        
        </ul>
    </div>
  )
}

export default Navbar