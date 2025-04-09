import { useState } from 'react';



const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    ) },
    { name: 'Analytics', icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
      </svg>
    ) },
    { name: 'Projects', icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
      </svg>
    ) },
    { name: 'Team', icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ) },
    { name: 'Messages', icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
      </svg>
    ), badge: 3 },
    { name: 'Settings', icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ) }
  ];

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
        <div className={`${isSidebarOpen ? 'flex' : 'hidden'} md:flex md:flex-shrink-0`}>
            <div className="flex flex-col w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out mt-20">
                {/* Sidebar header with toggle button */}
                {/* <div className="flex items-center justify-between h-16 px-4 bg-indigo-900">
                    <h1 className="text-xl font-bold text-white">Sidebar</h1>
                    <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="md:hidden text-white focus:outline-none"
                    >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                    </div> */}
               
                {/* Sidebar navigation */}
                <div className="flex flex-col flex-grow px-4 py-4 overflow-y-auto">
                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                
                                onClick={() => {
                                    setActiveItem(item.name)
                                    // Inertia.visit(item.path)
                                }}
                                className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg group ${
                                    activeItem === item.name
                                    ? 'text-white bg-indigo-900'
                                    : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'
                                }`}
                                >
                                {item.icon}
                                {item.name}
                                {/* {item.path} */}
                                {item.badge && (
                                    <span className="ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-indigo-800 bg-indigo-200 rounded-full">
                                    {item.badge}
                                    </span>
                                )}
                            </button>
                        ))}
                    </nav>
                    
                    {/* Bottom section */}
                    {/* <div className="mt-auto">
                        <div className="pt-4 mt-4 border-t border-indigo-700">
                            <div className="flex items-center px-4">
                                <img 
                                    className="w-10 h-10 rounded-full" 
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                                    alt="User profile" 
                                />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">John Doe</p>
                                    <button className="text-xs font-medium text-indigo-200 hover:text-white">
                                    View profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
      
        {/* Main content */}
        {/* <div className="flex flex-col flex-1 overflow-hidden"> */}
            {/* Mobile header with toggle button */}
            {/* <div className="flex items-center h-16 px-4 bg-white border-b border-gray-200 md:hidden">
                <button 
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-500 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <h1 className="ml-4 text-lg font-medium text-gray-800">{activeItem}</h1>
            </div> */}
            
            {/* Your main content goes here */}
            {/* <div className="flex items-center justify-center h-full p-4">
                <div className="p-8 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800">{activeItem} Content</h2>
                    <p className="mt-2 text-gray-600">This is the main content area for {activeItem}.</p>
                </div>
            </div>
        </div> */}
    </div>
    );
};

export default Sidebar;