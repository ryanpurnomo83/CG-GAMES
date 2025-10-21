import Image from 'next/image';
import Navbar from '../view/navigation-components/navbar';
import Drawer from '../view/navigation-components/drawer';

export default function Studio(){
    return(
        <div className="bg-[#F2F2F2] min-h-screen text-black">
            <Navbar/>
            <div className="flex flex-row items-center justify-items py-8 gap-4">
                <h2>New</h2>
                <h2>Edit</h2>
                <h2>Find</h2>
            </div>
        </div>
    );
}