const Navbar = () => {
  return (
    <nav className="bg-white border-b border-black text-3xl font-black px-2 sm:px-4 py-1">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        <p className='text-primary-green'>THE F2E</p>
    </a>
    
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-primary-green rounded-lg md:hidden hover:bg-primary-green hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
        <li>
          <a href="#" className="block py-2 pr-3 pl-3 text-primary-green" aria-current="page">關卡資訊</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-3 pl-3 text-primary-green">作品列表</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-3 pl-3 text-primary-green">攻略資訊</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-3 pl-3 text-primary-green">求職專區</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-3 pl-3 text-white rounded bg-primary-green ">我要報名</a>
        </li>
      </ul>
    </div>
    
  </div>
</nav>
  )
}

export default Navbar