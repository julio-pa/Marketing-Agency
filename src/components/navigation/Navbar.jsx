import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/img/Logo-Dev.png'
import loading from '../../assets/img/discord-loading-dots-discord-loading.gif'

function Navbar() {
  return (
    <nav className='top-0 w-full py-4 fixed'>
      <div className="bg-white px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img
              src={logo}
              width={80}
              height={70}
              className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 mx-4">Casos</NavLink>
            <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 mx-4">Servicios</NavLink>
            <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 mx-4">Nosotros</NavLink>
            <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 mx-4">Carreras</NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900  -offset-4 mx-4">Blogs</NavLink>
            <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 mx-4">Contacto</NavLink>
            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-red-600 px-6 py-2.5 text-lg font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Create new job
              <img src={loading} className='w-7 h-2 mt-1 ml-2' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(Navbar)