import { Link } from 'react-router-dom'
import Logo from '/images/msc-logo.png'
import AddToCart from './AddToCart'

function Header() {
  return (
    <header className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">

        <div className="flex items-center">
          <Link to="/"><img src={Logo} alt="Logo" className="max-w-[100%] mr-2" /></Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-amber-400 font-medium">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-amber-400 font-medium">Products</Link>
          <Link to="/cart" className="text-gray-700 hover:text-amber-400 font-medium">Cart</Link>
        </nav>

        
        <AddToCart />

      </div>
    </div>
  </header>
  )
}

export default Header