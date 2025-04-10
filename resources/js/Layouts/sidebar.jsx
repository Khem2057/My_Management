import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';


const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const {url} = usePage();
  const currentPath = url;
  const navItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
      </svg>
    ) },
    { 
      name: 'Profile Management', 
      path: '/profileManagement',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
      </svg>
    ) },
    { 
      name: 'Plans Making', 
      path: '/planMaking',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ) },
    { 
      name: 'Tasks Management', 
      path: '/taskManagement',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    ) },
    { 
      name: 'Time Management', 
      path: '/timeManagement',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ), badge: 3 },
    { 
      name: 'Money Management', 
      path: '/moneyManagement',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ) },
    { 
      name: 'Settings', 
      path: '/settings',
      icon: (
      <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ) }
  ];

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
            <div className=" flex flex-col  w-20 md:w-64 bg-gray-800 text-white transition-all duration-300 ease-in-out mt-20 ">
               
                {/* Sidebar navigation */}
                <div className="flex flex-col flex-grow px-3 py-4 overflow-y-auto">
                    <nav className="flex-1 space-y-2">
                    {navItems.map((item) => {
                      const isActive = currentPath === item.path;
                      return(
                        
                            <button
                                key={item.name}
                                onClick={() => {
                                    setActiveItem(item.name)
                                    Inertia.visit(item.path)
                                }}
                                className={`flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg group ${
                                    isActive
                                        ? 'text-white bg-indigo-900'
                                        : 'text-indigo-200 hover:bg-indigo-700 hover:text-white'
                                }`}
                            >
                                <span className="mr-2">{item.icon}</span>
                                <span className="hidden md:inline">{item.name}</span>

                                
                                  {item.badge && (
                                      <span className="hidden md:inline ml-auto inline-block px-2 py-0.5 text-xs font-semibold text-indigo-800 bg-indigo-200 rounded-full">
                                          {item.badge}
                                      </span>
                                  )}
                                
                                
                            </button>
                        )
                        })}`
                    </nav>
                    <div className='flex justify-center items-center mt-auto mb-1'>
                      MMS Version 1.0.0
                    </div>
                </div>
        </div>   
    </div>
    );
};

export default Sidebar;