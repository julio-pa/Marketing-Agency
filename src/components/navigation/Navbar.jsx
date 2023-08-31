import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/img/Logo-Dev.png'
import { DotLoader } from 'react-spinners';
import { useState } from 'react';
// import loading from '../../assets/img/discord-loading-dots-discord-loading.gif'

function Navbar() {

  const [loading, setLoading] = useState(true);

  window.onscroll = function () { scrollFunction() }

  function scrollFunction() {
    if (document.getElementById('navbar')) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add('shadow-navbar');
        document.getElementById('navbar').classList.add('bg-white');
      } else {
        document.getElementById('navbar').classList.remove('shadow-navbar');
        document.getElementById('navbar').classList.remove('bg-white');
      }
    }
  }

  return (
    <nav id='navbar' className=' top-0 transition duration-300 ease-in-out w-full py-4 bg-white shadow-navbar z-40 fixed'>
      <div className=" px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
          <Link to='/' className="ml-4 mt-2">
            <img
              src={logo}
              width={80}
              height={70}
              className="" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
            <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
            <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
            <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Carreras</NavLink>
            <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Blogs</NavLink>
            <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-red-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
            <Link
              to='/contacto'
              type="button"
              className="inline-flex items-center rounded-md border border-transparent ml-12 bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Hire Us
              <DotLoader className='ml-3 mr-1 h-5 w-5' loading={loading} zize={15} color='#f2f2f2'></DotLoader>
            </Link>
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