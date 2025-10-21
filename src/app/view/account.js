
import Navbar from '../view/navigation-components/navbar';
import List from '../view/layout-components/list';

export default function Account() {

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <Navbar />
      
      <div className="flex flex-col items-center py-8">
        <h1 className="text-black text-xl font-bold">Saul Goodman</h1>
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
        <div className="py-1"/>
        
      </div>
    </div>
  );
}
