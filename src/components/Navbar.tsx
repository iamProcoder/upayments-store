import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-between border border-solid border-gray-300 items-center p-3 bg-white rounded-md">
      <div>
        <Link to='/' className="flex">
          <div className="header-text">UPayments Store</div>
        </Link>
      </div>

      <div className="flex">
          <Link to='/add-product' className="header-text">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar