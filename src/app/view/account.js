
import Navbar from '../view/navigation-components/navbar';
import List from '../view/layout-components/list';

export default function Account() {

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <Navbar />
      
      <div className="flex flex-col items-center py-8">
        
        {/* <h1 className="text-black text-xl font-bold">Saul Goodman</h1>
        <h3 className="text-black text-md mb-4">NIJ : 23005432</h3>

        <List title="My Profile">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Email</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Phone</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tanggal Lahir</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">GMS</li>
        </List>
        <div className="py-1"/>
        <List title="Volunteer Experience">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Service Experience</li>
        </List>
        <div className="py-1"/> */}

        <h1 className="text-2xl font-semibold text-gray-800 mb-6">You Have to Login</h1>
        <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Login
            </button>

            <button className="px-6 py-2 bg-white text-blue-600 font-medium rounded-xl border border-blue-600 hover:bg-blue-50 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300">
              Register
            </button>
        </div>
      </div>
    </div>
  );
}
