"use client"
import { ReactNode, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';

// Define a type for valid roles
type Role = 'admin' | 'report' | 'academics' | 'senior' | 'junior';

// Ensure links are defined with default values
const links: Record<Role, string[]> = {
  admin: ['Admin Dashboard', 'Report', 'Academics', 'Logout'],
  report: ['Report', 'Logout'],
  academics: ['Assessment', 'Recommendation', 'Logout'],
  senior: ['Senior Staff Dashboard', 'Logout'],
  junior: ['Junior Staff Dashboard', 'Logout'],
};

const Sidebar = ({ role }: { role: Role }) => {
  return (
    <div className="w-64 h-screen bg-purple-200 p-4 space-y-4 fixed top-0 left-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out">
      <h2 className="text-lg font-semibold text-purple-600">APER FORM</h2>
      <ul className="pt-5 space-y-4">
        {links[role].map((link, index) => (
          <li key={index} className="py-2">
            <a href={`/dashboard/${role}/${link.toLowerCase().replace(' ', '-')}`} className="text-black hover:text-purple-900">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [role, setRole] = useState<Role>('admin'); // Default role or handle according to your logic
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Extract role from the URL path
    const pathParts = pathname.split('/');
    const extractedRole = pathParts[2] as Role;

    if (['admin', 'report', 'academics', 'senior', 'junior'].includes(extractedRole)) {
      setRole(extractedRole);
    } else {
      setRole('admin'); // Default role or handle according to your logic
    }
  }, [pathname]);

  return (
    <div className="flex">
       {isSidebarOpen && <div className="absolute inset-0 bg-black/50"></div>}
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden p-4 text-purple-600"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div className={`w-64 h-screen bg-purple-200 p-4 space-y-4 fixed top-0 left-0 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <h2 className="text-lg font-semibold text-purple-600">APER FORM</h2>
        
        <div className='absolute inset-0'>
            {isSidebarOpen && <div 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className='absolute top-[45%] right-[-1rem] border rounded-full border-purple-600'>
                <MdKeyboardDoubleArrowLeft size={25} />
            </div>}
        </div>

        <ul className="pt-5 space-y-4">
          {links[role].map((link, index) => (
            <li key={index} className="py-2">
              <a href={`/dashboard/${role}/${link.toLowerCase().replace(' ', '-')}`} className="text-black hover:text-purple-900">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-white min-h-screen md:ml-64">
        {role ? (
          children
        ) : (
          <div className="flex items-center justify-center h-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 2a6 6 0 100 12A6 6 0 0010 2zM4.293 6.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <p className="text-gray-600 text-lg">Access Denied</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;